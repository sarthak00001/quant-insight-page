import { useState } from "react";

const GOOGLE_SHEET_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbwN6FHEd6n8H8ZVWaqGCQPcnKYMcV89JcRar-MJbZAsYaCPl-gmQJvZUhw0Vju2pqBo/exec";

const WHATSAPP_LINK = "https://chat.whatsapp.com/B8POZTIS5YP6OFBIMbB3xM";

const useLeadSubmit = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");

  const submitLead = async (lead) => {
    setLoading(true);

    try {
      await fetch(GOOGLE_SHEET_WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });

      setSuccess(true);
      setWhatsappLink(WHATSAPP_LINK);

    } catch (err) {
      console.error("Lead submit error:", err);
    } finally {
      setLoading(false);
    }
  };

  return { submitLead, loading, success, whatsappLink };
};

export default useLeadSubmit;
