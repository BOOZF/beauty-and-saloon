"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { format } from "date-fns";

interface BookingCatalogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingCatalog({
  isOpen,
  onClose,
}: BookingCatalogProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Available time slots (you can customize these)
  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) return;

    const formattedDate = format(selectedDate, "MMMM d, yyyy");
    const message = `I would like to book an appointment at ${formattedDate} at ${selectedTime}.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp business number (replace with your actual number)
    const whatsappNumber = "1234567890"; // Replace with your actual WhatsApp number

    // Open WhatsApp with the pre-filled message
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );

    // Close the modal after booking
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t.bookAnAppointment}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-6 py-4">
          <div>
            <h3 className="text-sm font-medium mb-2">{t.selectDate}</h3>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
              disabled={(date) => date < new Date()}
            />
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">{t.selectTime}</h3>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  className="w-full"
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>

          <Button
            className="w-full"
            disabled={!selectedDate || !selectedTime}
            onClick={handleBooking}
          >
            {t.confirmBooking}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
