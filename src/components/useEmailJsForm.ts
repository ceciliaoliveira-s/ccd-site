import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


type Options = {
  serviceId?: string;
  templateId?: string;
  publicKey?: string;
  require?: Array<string>;
};

export function useEmailJsForm(opts: Options = {}) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const SERVICE_ID =
    opts.serviceId ?? (import.meta.env.VITE_EMAILJS_SERVICE_ID as string);
  const TEMPLATE_ID =
    opts.templateId ?? (import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string);
  const PUBLIC_KEY =
    opts.publicKey ?? (import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string);

  // Ajuste para os campos do formulário do Telainicio
  const REQUIRED = opts.require ?? ["nome", "email", "telefone", "empresa", "necessidade"];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    // Honeypot
    const hp = formRef.current.elements.namedItem("website") as
      | HTMLInputElement
      | null;
    if (hp && hp.value) return;

    // Validação mínima
    for (const name of REQUIRED) {
      const el = formRef.current.elements.namedItem(name) as
        | HTMLInputElement
        | HTMLTextAreaElement
        | null;
      if (!el || !el.value.trim()) {
  setErrorMsg("Preencha todos os campos obrigatórios.");
        el?.focus();
        return;
      }
    }

    setSending(true);
    setSuccessMsg(null);
    setErrorMsg(null);

    // Extras
    (formRef.current.elements.namedItem("page_url") as HTMLInputElement).value =
      window.location.href;
    (formRef.current.elements.namedItem(
      "submitted_at"
    ) as HTMLInputElement).value = new Date().toISOString();

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      formRef.current.reset();
      (formRef.current.elements.namedItem("page_url") as HTMLInputElement).value =
        window.location.href;
      (formRef.current.elements.namedItem(
        "submitted_at"
      ) as HTMLInputElement).value = new Date().toISOString();

      setSuccessMsg("Mensagem enviada! Em breve entraremos em contato.");
    } catch (err) {
      console.error(err);
      setErrorMsg("Falha ao enviar. Verifique a conexão e tente novamente.");
    } finally {
      setSending(false);
    }
  }

  return { formRef, sending, successMsg, errorMsg, handleSubmit, setSuccessMsg, setErrorMsg };
}