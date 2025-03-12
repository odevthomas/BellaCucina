import React from "react";
import { Button } from "@/components/ui/button";
import DateTimePicker from "./DateTimePicker";
import ReservationForm from "./ReservationForm";

interface ReservationSectionProps {
  restaurantName?: string;
  restaurantImage?: string;
  title?: string;
  description?: string;
}

const ReservationSection = ({
  restaurantName = "Bella Cucina",
  restaurantImage = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
  title = "Make a Reservation",
  description = "Reserve your table online and enjoy a seamless dining experience at our restaurant.",
}: ReservationSectionProps) => {
  const [step, setStep] = React.useState(1);
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    undefined,
  );
  const [selectedTimeSlot, setSelectedTimeSlot] = React.useState<{
    id: string;
    time: string;
    available: boolean;
  } | null>(null);

  const handleDateTimeSelect = (
    date: Date | undefined,
    timeSlot: { id: string; time: string; available: boolean } | null,
  ) => {
    setSelectedDate(date);
    setSelectedTimeSlot(timeSlot);
  };

  const handleContinue = () => {
    if (selectedDate && selectedTimeSlot) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (values: any) => {
    console.log("Reservation submitted:", {
      ...values,
      date: selectedDate,
      time: selectedTimeSlot?.time,
    });
    // In a real app, this would send the data to a server
    alert("Reservation submitted successfully! We'll see you soon.");
    // Reset form
    setStep(1);
    setSelectedDate(undefined);
    setSelectedTimeSlot(null);
  };

  return (
    <section id="reservations" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
              <img
                src={restaurantImage}
                alt={restaurantName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-semibold">{restaurantName}</h3>
                  <p className="text-sm opacity-90">
                    Experience authentic cuisine in an elegant setting
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-sm border p-6">
            {step === 1 ? (
              <>
                <h3 className="text-xl font-semibold mb-6 text-center">
                  Select Date & Time
                </h3>
                <DateTimePicker
                  onDateTimeSelect={handleDateTimeSelect}
                  selectedDate={selectedDate}
                  selectedTimeSlot={selectedTimeSlot}
                />
                <div className="mt-6 flex justify-end">
                  <Button
                    onClick={handleContinue}
                    disabled={!selectedDate || !selectedTimeSlot}
                    className="w-full md:w-auto"
                  >
                    Continue to Details
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center mb-6">
                  <Button variant="ghost" onClick={handleBack} className="mr-2">
                    Back
                  </Button>
                  <h3 className="text-xl font-semibold">
                    Complete Reservation
                  </h3>
                </div>
                <ReservationForm
                  onSubmit={handleSubmit}
                  selectedDate={selectedDate}
                  selectedTime={selectedTimeSlot?.time}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
