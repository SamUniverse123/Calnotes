const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 0,
  })
  
  export function formatCurrency(amount: number) {
    return CURRENCY_FORMATTER.format(amount/100)
  }
  
  const NUMBER_FORMATTER = new Intl.NumberFormat("en-US")
  
  export function formatNumber(number: number) {
    return NUMBER_FORMATTER.format(number)
  }


  export function formatDate(date: Date): string {
    // Create a DateTimeFormat object with the desired options
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        timeZone: 'UTC'  // Optional: Ensure it uses UTC time zone
    };

    // Format the date using the Intl.DateTimeFormat object
    const parts = new Intl.DateTimeFormat('en-GB', options).formatToParts(date);

    // Extract the day, month, and year parts
    const day = parts.find(part => part.type === 'day')?.value;
    const month = parts.find(part => part.type === 'month')?.value;
    const year = parts.find(part => part.type === 'year')?.value;

    // Return the formatted date string
    return `${day}-${month}-${year}`;
}