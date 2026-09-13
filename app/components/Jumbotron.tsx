

export default function Jumbotron() {

    const dynamicGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) {
            return "Good Morning";
        } else if (hour < 18) {
            return "Good Afternoon";
        } else {
            return "Good Evening";
        }
    }

    return (
        <div className="w-full max-w-4xl text-center py-32">
            <h1 className="text-6xl font-extrabold font-sans text-white">
                {dynamicGreeting()}
            </h1>
            <hr className="mt-2 border-white/20 rounded-lg" />
            <h3 className="text-xl font-thin font-sans text-white mt-2">
                Track your workouts and stay fit
            </h3>
        </div>
    )
}