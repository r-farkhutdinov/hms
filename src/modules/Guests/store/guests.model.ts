import { types, Instance } from "mobx-state-tree";

const CountryModel = types.model({
  id: types.number,
  name: types.string
});

const DocumentModel = types.model({
  number: types.string,
  firstName: types.string,
  lastName: types.string,
  countryIssued: CountryModel,
  birthday: types.string,
  documentType: types.string
});

const VisaModel = types.model({
  number: types.string,
  firstName: types.string,
  lastName: types.string,
  countryIssued: CountryModel
});

const GuestModel = types.model({
  id: types.number,
  firstName: types.string,
  lastName: types.string,
  country: CountryModel,
  document: DocumentModel,
  visa: VisaModel
});

const GuestReducedModel = types.model({
  firstName: types.string,
  lastName: types.string,
  country: CountryModel,
  id: types.number
});

export const GuestsModel = types.model({
  loading: types.boolean,
  guestsList: types.maybe(types.array(GuestReducedModel)),
  guestDetails: types.maybe(GuestModel)
});

export type GuestsModelType = Instance<typeof GuestsModel>;
export type GuestModelType = Instance<typeof GuestModel>;
export type GuestReducedModelType = Instance<typeof GuestReducedModel>;
