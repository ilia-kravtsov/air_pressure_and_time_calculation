export const timeCount = (time1: string, time2: string) => {
    // Split the time strings into hours and minutes
    const [hours1, minutes1] = time1.split(':').map(Number);
    const [hours2, minutes2] = time2.split(':').map(Number);

    // Calculate the total minutes
    let totalMinutes = (hours1 + hours2) * 60 + minutes1 + minutes2;

    // Calculate the hours and minutes for the result
    const resultHours = Math.floor(totalMinutes / 60);
    const resultMinutes = Math.floor(totalMinutes % 60);

    return `${resultHours.toString().padStart(2, '0')}:${resultMinutes.toString().padStart(2, '0')}`;
}