let myAdress: {
    number: number;
    streetName: string;
    city: string;
    zipcode: number;
} = {
    number: 1245,
    streetName: 'Coding Plains Ct',
    city: 'Indianapolis',
    zipcode: 46239
};

const dailyTemps = [93, 78, 88];

function convertToDegreeCelcius(temps: number[]) {
    return temps.map(temp => Math.floor((temp - 32) * .55555))
}

console.log(convertToDegreeCelcius(dailyTemps));

interface StateInitials {
    alabama: string,
    alaska: string,
    arizona: string,
    indiana: string,
    florida: string
}

let StateInitials: StateInitials = {
    alabama: "AL",
    alaska: 'AK',
    arizona: 'AZ',
    indiana: 'IN',
    florida: 'FL',
    newjersey: 'NJ'
}