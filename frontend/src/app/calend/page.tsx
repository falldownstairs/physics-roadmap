import Link from "next/link";

export const metadata = {
    title: "Calend by PhysicsRoadmap",
    description: "Join the waitlist for Calend, an all-in-one productivity app by the creator of PhysicsRoadmap.",
};

export default function CalendPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center p-6">
            <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-8 sm:p-12 space-y-8">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
                    A quick message from the creator
                </h1>

                <div className="space-y-5 text-slate-700 leading-relaxed text-base sm:text-lg">
                    <p>
                        Hi there, this is the creator of PhysicsRoadmap. Since you are using this website, I am guessing you are a high school student heading to university soon. The transition can be very overwhelming for a lot of people, and I think it really helps to have a proper system to keep yourself on track to achieve your goals.
                    </p>
                    <p>
                        I personally struggle with managing the heavy workload in university, and it has really made me realize the importance of staying organized. That is why I built <strong>Calend</strong>. It is an all-in-one productivity app that includes task management, projects with subtasks, reminders, a calendar view, and more.
                    </p>
                    <p>
                        One specific feature that I thought of, which I do not see anywhere else on the productivity market, is built-in app blocking. This allows you to block distracting apps during specific set times of the day.
                    </p>
                    <p>
                        I plan on making both a free and a paid version of the app. However, if you sign up for the waitlist now, I will give you temporary free access to the premium version.
                    </p>
                    <p>
                        Thanks for taking the time to read this, and you can join the waitlist below!
                    </p>
                </div>

                <div className="pt-4">
                    <Link
                        href="https://calend.ca"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-md text-lg"
                    >
                        Join the Waitlist →
                    </Link>
                </div>
            </div>
        </div>
    );
}
