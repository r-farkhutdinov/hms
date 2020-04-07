import {
  GuestModelType,
  GuestReducedModelType
} from "../../modules/Guests/store/guests.model";

export const guests: GuestReducedModelType[] = [
  {
    id: 0,
    firstName: "Ruslan",
    lastName: "Farkhutdinov",
    country: {
      id: 0,
      name: "Russian Federation"
    }
  },
  {
    id: 1,
    firstName: "Taimuraz",
    lastName: "Tolparov",
    country: {
      id: 0,
      name: "Russian Federation"
    }
  },
  {
    id: 2,
    firstName: "Nikolay",
    lastName: "Matyashov",
    country: {
      id: 0,
      name: "Russian Federation"
    }
  }
];

export const guestDetails: GuestModelType[] = [
  {
    id: 0,
    firstName: "Ruslan",
    lastName: "Farkhutdinov",
    country: {
      id: 0,
      name: "Russian Federation"
    },
    document: {
      number: "97 999999",
      firstName: "Ruslan",
      lastName: "Farkhutdinov",
      countryIssued: {
        id: 0,
        name: "Russian Federation"
      },
      birthday: "14.12.1997",
      documentType: "Passport"
    },
    visa: {
      number: "7777",
      firstName: "Ruslan",
      lastName: "Farkhutdinov",
      countryIssued: {
        id: 0,
        name: "Russian Federation"
      }
    }
  },
  {
    id: 1,
    firstName: "Taimuraz",
    lastName: "Tolparov",
    country: {
      id: 0,
      name: "Russian Federation"
    },
    document: {
      number: "97 999998",
      firstName: "Taimuraz",
      lastName: "Tolparov",
      countryIssued: {
        id: 0,
        name: "Russian Federation"
      },
      birthday: "04.10.1998",
      documentType: "Passport"
    },
    visa: {
      number: "7778",
      firstName: "Taimuraz",
      lastName: "Tolparov",
      countryIssued: {
        id: 0,
        name: "Russian Federation"
      }
    }
  },
  {
    id: 2,
    firstName: "Nikolay",
    lastName: "Matyashov",
    country: {
      id: 0,
      name: "Russian Federation"
    },
    document: {
      number: "97 999997",
      firstName: "Nikolay",
      lastName: "Matyashov",
      countryIssued: {
        id: 0,
        name: "Russian Federation"
      },
      birthday: "13.12.1997",
      documentType: "Passport"
    },
    visa: {
      number: "7779",
      firstName: "Nikolay",
      lastName: "Matyashov",
      countryIssued: {
        id: 0,
        name: "Russian Federation"
      }
    }
  }
];
