import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import useLeadSubmit from "@/hooks/useLeadSubmit";

const LeadFormModal = ({ onClose }) => {
  const { submitLead, loading, success, whatsappLink } = useLeadSubmit();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await submitLead(form);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <div className="bg-white w-full max-w-md rounded-xl p-6 relative text-black shadow-xl">
        
        <button onClick={onClose} className="absolute top-3 right-3">
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          Register for Masterclass
        </h2>

        {success ? (
          <div className="text-center text-green-600 font-semibold text-lg py-6">
            🎉 Registration Successful!
            <br /><br />

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-5 py-3 rounded-lg text-base font-semibold"
            >
              Join WhatsApp Group →
            </a>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <input
              name="name"
              onChange={update}
              value={form.name}
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-100"
              required
            />

            <input
            //   type="email"
              name="email"
              onChange={update}
              value={form.email}
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-100"
              required
            />

            <input
              type="tel"
              name="phone"
              onChange={update}
              value={form.phone}
              placeholder="Phone Number (eg. 9264758264)"
              className="w-full px-4 py-3 rounded-lg bg-gray-100"
              required
              pattern="\d{10,13}"
            />

            <Button type="submit" disabled={loading} className="w-full h-12 text-lg">
              {loading ? "Submitting…" : "Submit"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LeadFormModal;
