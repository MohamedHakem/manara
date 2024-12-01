import { Zap } from 'lucide-react';

export default function DailyStrike() {
  const days = ['M', 'T', 'W', 'Th', 'F'];

  return (
    <div className="max-w-md mx-auto">
      {/* <h1 className="text-2xl font-bold mb-4">Welcome, Fname</h1> */}

      <div className="p-6 active:scale-100 shadow-none border rounded-xl">
        {/* Progress Number */}
        <div className="flex justify-between items-center mb-8">
          <span className="text-6xl font-bold">0</span>
          <div className="flex gap-1">
            <div className="w-6 h-6 rounded-md border" />
            <div className="w-6 h-6 rounded-md border" />
          </div>
        </div>

        {/* Week Progress */}
        <div className="flex justify-between mb-8">
          {days.map((day) => (
            <div key={day} className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full border flex items-center justify-center">
                <Zap className="w-5 h-5 text-gray-300" />
              </div>
              <span className="text-sm">{day}</span>
            </div>
          ))}
        </div>

        {/* Learning Habits Section */}
        {/* <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex gap-4 mb-4">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0">
                <NavWordmark  />
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-orange-400 rounded" />
            </div>
            <div>
              <h2 className="font-bold mb-4">START A LEARNING HABIT</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="course" />
                  <label htmlFor="course" className="text-sm">
                    Start your first course
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="lesson" />
                  <label htmlFor="lesson" className="text-sm">
                    Finish your first lesson
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="streak" />
                  <label htmlFor="streak" className="text-sm">
                    Continue your streak tomorrow
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
