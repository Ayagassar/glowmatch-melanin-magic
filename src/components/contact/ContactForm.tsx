
import { Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Form submission logic would go here
  };

  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <Mail className="w-6 h-6 mt-1 text-skin-terracotta-600" />
          <div>
            <h3 className="text-lg font-medium text-skin-brown-800">Email Us</h3>
            <p className="text-skin-brown-600">support@glowmatch.ai</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <Phone className="w-6 h-6 mt-1 text-skin-terracotta-600" />
          <div>
            <h3 className="text-lg font-medium text-skin-brown-800">Call Us</h3>
            <p className="text-skin-brown-600">+1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <MessageSquare className="w-6 h-6 mt-1 text-skin-terracotta-600" />
          <div>
            <h3 className="text-lg font-medium text-skin-brown-800">Live Chat</h3>
            <p className="text-skin-brown-600">Available Monday to Friday, 9am - 5pm EST</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full"
            required
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full"
            required
          />
        </div>
        <div>
          <Textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full min-h-[150px]"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
