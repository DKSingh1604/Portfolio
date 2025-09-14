import { useEffect } from "react";
import {
  Calendar,
  Clock,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

declare global {
  interface Window {
    Cal: {
      (
        action: string,
        options?: Record<string, unknown>
      ): void;
      loaded?: boolean;
      q?: unknown[];
    };
  }
}

interface CalBookingProps {
  calUsername?: string; // Your Cal.com username
  className?: string;
}

export function CalBooking({
  calUsername = "your-username",
  className,
}: CalBookingProps) {
  useEffect(() => {
    // Initialize Cal.com when component mounts
    if (
      typeof window !== "undefined" &&
      window.Cal
    ) {
      window.Cal("init", {
        origin: "https://app.cal.com",
      });
    }
  }, []);

  const openCalModal = () => {
    if (window.Cal) {
      window.Cal("openModal", {
        calLink: calUsername,
        config: {
          name: "Dev Karan Singh",
          email: "dev1604karan@gmail.com",
          notes: "Portfolio consultation",
          guests: [],
          theme: "light",
        },
      });
    }
  };

  const meetingTypes = [
    {
      icon: <Video className="h-5 w-5" />,
      title: "30-Min Discovery Call",
      description:
        "Let's discuss your project requirements and goals",
      duration: "30 minutes",
      type: "video",
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Project Consultation",
      description:
        "In-depth discussion about your development needs",
      duration: "60 minutes",
      type: "consultation",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Quick Chat",
      description:
        "Brief discussion for simple questions or guidance",
      duration: "15 minutes",
      type: "quick",
    },
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold mb-4">
          Schedule a Meeting
        </h3>
        <p className="text-muted-foreground">
          Ready to start your project? Book a call
          with me to discuss your ideas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {meetingTypes.map((meeting, index) => (
          <Card
            key={index}
            className="cursor-pointer hover:shadow-lg transition-all duration-200 border hover:border-primary/20"
            onClick={openCalModal}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-3 p-3 rounded-full bg-primary/10 w-fit">
                {meeting.icon}
              </div>
              <CardTitle className="text-lg">
                {meeting.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground font-medium">
                {meeting.duration}
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                {meeting.description}
              </p>
              <Button
                className="w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  openCalModal();
                }}
              >
                Book Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Alternative: Direct Cal.com embed button */}
      <div className="text-center pt-6">
        <p className="text-sm text-muted-foreground mb-4">
          Or view all available time slots:
        </p>
        <Button
          variant="outline"
          size="lg"
          onClick={openCalModal}
          className="min-w-[200px]"
        >
          <Calendar className="mr-2 h-4 w-4" />
          View Calendar
        </Button>
      </div>
    </div>
  );
}
