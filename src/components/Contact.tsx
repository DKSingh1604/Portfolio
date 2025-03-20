
import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      toast.success("Message sent successfully! I'll get back to you soon.");
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      label: "Email",
      value: "dev1604karan@gmail.com",
      link: "mailto:dev1604karan@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      label: "Phone",
      value: "+91 88680 19315",
      link: "tel:+918868019315",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      link: "https://github.com/DKSingh1604/",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/dev-karan-singh/",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter",
      link: "https://x.com/Dee_Kay_Singh",
    },

  ];

  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-secondary/30">
      <div className="container mx-auto max-w-7xl flex flex-col items-center">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-3"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Contact Me
          </motion.h2>
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> */}
        <div className="flex flex-col gap-12 w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Let's Talk</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to reach out through any of the following channels or the contact form.
            </p>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{info.label}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-background flex items-center justify-center border border-border hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
