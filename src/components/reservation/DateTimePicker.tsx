import React, { useState, useEffect } from "react";
import { format, addDays, isSameDay } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface DateTimePickerProps {
  onDateTimeSelect?: (
    date: Date | undefined,
    timeSlot: TimeSlot | null,
  ) => void;
  selectedDate?: Date | undefined;
  selectedTimeSlot?: TimeSlot | null;
}

const DateTimePicker = ({
  onDateTimeSelect = () => {},
  selectedDate,
  selectedTimeSlot,
}: DateTimePickerProps) => {
  const [date, setDate] = useState<Date | undefined>(selectedDate);
  const [timeSlot, setTimeSlot] = useState<TimeSlot | null>(
    selectedTimeSlot || null,
  );
  const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([]);

  // Generate time slots for the selected date
  useEffect(() => {
    if (date) {
      // In a real app, this would come from an API based on the selected date
      // For demo purposes, we'll generate some slots with random availability
      const slots: TimeSlot[] = [
        { id: "1", time: "11:30 AM", available: true },
        { id: "2", time: "12:00 PM", available: true },
        { id: "3", time: "12:30 PM", available: false },
        { id: "4", time: "1:00 PM", available: true },
        { id: "5", time: "1:30 PM", available: false },
        { id: "6", time: "5:30 PM", available: true },
        { id: "7", time: "6:00 PM", available: true },
        { id: "8", time: "6:30 PM", available: true },
        { id: "9", time: "7:00 PM", available: true },
        { id: "10", time: "7:30 PM", available: false },
        { id: "11", time: "8:00 PM", available: true },
        { id: "12", time: "8:30 PM", available: true },
      ];
      setAvailableTimeSlots(slots);
    } else {
      setAvailableTimeSlots([]);
    }
  }, [date]);

  const handleDateSelect = (newDate: Date | undefined) => {
    setDate(newDate);
    setTimeSlot(null);
    onDateTimeSelect(newDate, null);
  };

  const handleTimeSelect = (slot: TimeSlot) => {
    if (!slot.available) return;
    setTimeSlot(slot);
    onDateTimeSelect(date, slot);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <Label className="font-medium mb-2 block">
              Selecione uma data:
            </Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              disabled={(date) => date < new Date()}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Label className="font-medium mb-2 block">
              Selecione um horário:
            </Label>
            <div className="grid grid-cols-3 gap-2">
              {availableTimeSlots.map((slot) => (
                <Button
                  key={slot.id}
                  variant={timeSlot?.id === slot.id ? "default" : "outline"}
                  className={`${!slot.available ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={!slot.available}
                  onClick={() => handleTimeSelect(slot)}
                >
                  {slot.time}
                </Button>
              ))}
            </div>
            {!date && (
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Por favor, selecione uma data primeiro
              </p>
            )}
            {date && !timeSlot && (
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Por favor, selecione um horário disponível
              </p>
            )}
            {date && timeSlot && (
              <div className="mt-6 p-4 bg-muted rounded-md">
                <Label className="font-medium">Sua Seleção:</Label>
                <p className="text-sm mt-1">
                  {date.toLocaleDateString("pt-BR", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  às {timeSlot.time}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DateTimePicker;
