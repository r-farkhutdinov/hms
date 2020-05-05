import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "bookings" */
export type Bookings = {
   __typename?: 'bookings';
  booking_id: Scalars['Int'];
  date_end: Scalars['date'];
  date_start: Scalars['date'];
  /** An object relationship */
  guest?: Maybe<Guests>;
  guest_id: Scalars['Int'];
  /** An object relationship */
  room?: Maybe<Rooms>;
  room_id: Scalars['Int'];
};

/** aggregated selection of "bookings" */
export type Bookings_Aggregate = {
   __typename?: 'bookings_aggregate';
  aggregate?: Maybe<Bookings_Aggregate_Fields>;
  nodes: Array<Bookings>;
};

/** aggregate fields of "bookings" */
export type Bookings_Aggregate_Fields = {
   __typename?: 'bookings_aggregate_fields';
  avg?: Maybe<Bookings_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Bookings_Max_Fields>;
  min?: Maybe<Bookings_Min_Fields>;
  stddev?: Maybe<Bookings_Stddev_Fields>;
  stddev_pop?: Maybe<Bookings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bookings_Stddev_Samp_Fields>;
  sum?: Maybe<Bookings_Sum_Fields>;
  var_pop?: Maybe<Bookings_Var_Pop_Fields>;
  var_samp?: Maybe<Bookings_Var_Samp_Fields>;
  variance?: Maybe<Bookings_Variance_Fields>;
};


/** aggregate fields of "bookings" */
export type Bookings_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Bookings_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bookings" */
export type Bookings_Aggregate_Order_By = {
  avg?: Maybe<Bookings_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Bookings_Max_Order_By>;
  min?: Maybe<Bookings_Min_Order_By>;
  stddev?: Maybe<Bookings_Stddev_Order_By>;
  stddev_pop?: Maybe<Bookings_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Bookings_Stddev_Samp_Order_By>;
  sum?: Maybe<Bookings_Sum_Order_By>;
  var_pop?: Maybe<Bookings_Var_Pop_Order_By>;
  var_samp?: Maybe<Bookings_Var_Samp_Order_By>;
  variance?: Maybe<Bookings_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "bookings" */
export type Bookings_Arr_Rel_Insert_Input = {
  data: Array<Bookings_Insert_Input>;
  on_conflict?: Maybe<Bookings_On_Conflict>;
};

/** aggregate avg on columns */
export type Bookings_Avg_Fields = {
   __typename?: 'bookings_avg_fields';
  booking_id?: Maybe<Scalars['Float']>;
  guest_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "bookings" */
export type Bookings_Avg_Order_By = {
  booking_id?: Maybe<Order_By>;
  guest_id?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "bookings". All fields are combined with a logical 'AND'. */
export type Bookings_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Bookings_Bool_Exp>>>;
  _not?: Maybe<Bookings_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Bookings_Bool_Exp>>>;
  booking_id?: Maybe<Int_Comparison_Exp>;
  date_end?: Maybe<Date_Comparison_Exp>;
  date_start?: Maybe<Date_Comparison_Exp>;
  guest?: Maybe<Guests_Bool_Exp>;
  guest_id?: Maybe<Int_Comparison_Exp>;
  room?: Maybe<Rooms_Bool_Exp>;
  room_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "bookings" */
export enum Bookings_Constraint {
  /** unique or primary key constraint */
  BookingsPkey = 'bookings_pkey'
}

/** input type for incrementing integer columne in table "bookings" */
export type Bookings_Inc_Input = {
  booking_id?: Maybe<Scalars['Int']>;
  guest_id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "bookings" */
export type Bookings_Insert_Input = {
  booking_id?: Maybe<Scalars['Int']>;
  date_end?: Maybe<Scalars['date']>;
  date_start?: Maybe<Scalars['date']>;
  guest?: Maybe<Guests_Obj_Rel_Insert_Input>;
  guest_id?: Maybe<Scalars['Int']>;
  room?: Maybe<Rooms_Obj_Rel_Insert_Input>;
  room_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Bookings_Max_Fields = {
   __typename?: 'bookings_max_fields';
  booking_id?: Maybe<Scalars['Int']>;
  date_end?: Maybe<Scalars['date']>;
  date_start?: Maybe<Scalars['date']>;
  guest_id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "bookings" */
export type Bookings_Max_Order_By = {
  booking_id?: Maybe<Order_By>;
  date_end?: Maybe<Order_By>;
  date_start?: Maybe<Order_By>;
  guest_id?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Bookings_Min_Fields = {
   __typename?: 'bookings_min_fields';
  booking_id?: Maybe<Scalars['Int']>;
  date_end?: Maybe<Scalars['date']>;
  date_start?: Maybe<Scalars['date']>;
  guest_id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "bookings" */
export type Bookings_Min_Order_By = {
  booking_id?: Maybe<Order_By>;
  date_end?: Maybe<Order_By>;
  date_start?: Maybe<Order_By>;
  guest_id?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "bookings" */
export type Bookings_Mutation_Response = {
   __typename?: 'bookings_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Bookings>;
};

/** input type for inserting object relation for remote table "bookings" */
export type Bookings_Obj_Rel_Insert_Input = {
  data: Bookings_Insert_Input;
  on_conflict?: Maybe<Bookings_On_Conflict>;
};

/** on conflict condition type for table "bookings" */
export type Bookings_On_Conflict = {
  constraint: Bookings_Constraint;
  update_columns: Array<Bookings_Update_Column>;
  where?: Maybe<Bookings_Bool_Exp>;
};

/** ordering options when selecting data from "bookings" */
export type Bookings_Order_By = {
  booking_id?: Maybe<Order_By>;
  date_end?: Maybe<Order_By>;
  date_start?: Maybe<Order_By>;
  guest?: Maybe<Guests_Order_By>;
  guest_id?: Maybe<Order_By>;
  room?: Maybe<Rooms_Order_By>;
  room_id?: Maybe<Order_By>;
};

/** select columns of table "bookings" */
export enum Bookings_Select_Column {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  DateEnd = 'date_end',
  /** column name */
  DateStart = 'date_start',
  /** column name */
  GuestId = 'guest_id',
  /** column name */
  RoomId = 'room_id'
}

/** input type for updating data in table "bookings" */
export type Bookings_Set_Input = {
  booking_id?: Maybe<Scalars['Int']>;
  date_end?: Maybe<Scalars['date']>;
  date_start?: Maybe<Scalars['date']>;
  guest_id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Bookings_Stddev_Fields = {
   __typename?: 'bookings_stddev_fields';
  booking_id?: Maybe<Scalars['Float']>;
  guest_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "bookings" */
export type Bookings_Stddev_Order_By = {
  booking_id?: Maybe<Order_By>;
  guest_id?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Bookings_Stddev_Pop_Fields = {
   __typename?: 'bookings_stddev_pop_fields';
  booking_id?: Maybe<Scalars['Float']>;
  guest_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "bookings" */
export type Bookings_Stddev_Pop_Order_By = {
  booking_id?: Maybe<Order_By>;
  guest_id?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Bookings_Stddev_Samp_Fields = {
   __typename?: 'bookings_stddev_samp_fields';
  booking_id?: Maybe<Scalars['Float']>;
  guest_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "bookings" */
export type Bookings_Stddev_Samp_Order_By = {
  booking_id?: Maybe<Order_By>;
  guest_id?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Bookings_Sum_Fields = {
   __typename?: 'bookings_sum_fields';
  booking_id?: Maybe<Scalars['Int']>;
  guest_id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "bookings" */
export type Bookings_Sum_Order_By = {
  booking_id?: Maybe<Order_By>;
  guest_id?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
};

/** update columns of table "bookings" */
export enum Bookings_Update_Column {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  DateEnd = 'date_end',
  /** column name */
  DateStart = 'date_start',
  /** column name */
  GuestId = 'guest_id',
  /** column name */
  RoomId = 'room_id'
}

/** aggregate var_pop on columns */
export type Bookings_Var_Pop_Fields = {
   __typename?: 'bookings_var_pop_fields';
  booking_id?: Maybe<Scalars['Float']>;
  guest_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "bookings" */
export type Bookings_Var_Pop_Order_By = {
  booking_id?: Maybe<Order_By>;
  guest_id?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Bookings_Var_Samp_Fields = {
   __typename?: 'bookings_var_samp_fields';
  booking_id?: Maybe<Scalars['Float']>;
  guest_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "bookings" */
export type Bookings_Var_Samp_Order_By = {
  booking_id?: Maybe<Order_By>;
  guest_id?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Bookings_Variance_Fields = {
   __typename?: 'bookings_variance_fields';
  booking_id?: Maybe<Scalars['Float']>;
  guest_id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "bookings" */
export type Bookings_Variance_Order_By = {
  booking_id?: Maybe<Order_By>;
  guest_id?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
};

/** columns and relationships of "countries" */
export type Countries = {
   __typename?: 'countries';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "countries" */
export type Countries_Aggregate = {
   __typename?: 'countries_aggregate';
  aggregate?: Maybe<Countries_Aggregate_Fields>;
  nodes: Array<Countries>;
};

/** aggregate fields of "countries" */
export type Countries_Aggregate_Fields = {
   __typename?: 'countries_aggregate_fields';
  avg?: Maybe<Countries_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Countries_Max_Fields>;
  min?: Maybe<Countries_Min_Fields>;
  stddev?: Maybe<Countries_Stddev_Fields>;
  stddev_pop?: Maybe<Countries_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Countries_Stddev_Samp_Fields>;
  sum?: Maybe<Countries_Sum_Fields>;
  var_pop?: Maybe<Countries_Var_Pop_Fields>;
  var_samp?: Maybe<Countries_Var_Samp_Fields>;
  variance?: Maybe<Countries_Variance_Fields>;
};


/** aggregate fields of "countries" */
export type Countries_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Countries_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "countries" */
export type Countries_Aggregate_Order_By = {
  avg?: Maybe<Countries_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Countries_Max_Order_By>;
  min?: Maybe<Countries_Min_Order_By>;
  stddev?: Maybe<Countries_Stddev_Order_By>;
  stddev_pop?: Maybe<Countries_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Countries_Stddev_Samp_Order_By>;
  sum?: Maybe<Countries_Sum_Order_By>;
  var_pop?: Maybe<Countries_Var_Pop_Order_By>;
  var_samp?: Maybe<Countries_Var_Samp_Order_By>;
  variance?: Maybe<Countries_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "countries" */
export type Countries_Arr_Rel_Insert_Input = {
  data: Array<Countries_Insert_Input>;
  on_conflict?: Maybe<Countries_On_Conflict>;
};

/** aggregate avg on columns */
export type Countries_Avg_Fields = {
   __typename?: 'countries_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "countries" */
export type Countries_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "countries". All fields are combined with a logical 'AND'. */
export type Countries_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Countries_Bool_Exp>>>;
  _not?: Maybe<Countries_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Countries_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "countries" */
export enum Countries_Constraint {
  /** unique or primary key constraint */
  CountriesPkey = 'countries_pkey'
}

/** input type for incrementing integer columne in table "countries" */
export type Countries_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "countries" */
export type Countries_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Countries_Max_Fields = {
   __typename?: 'countries_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "countries" */
export type Countries_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Countries_Min_Fields = {
   __typename?: 'countries_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "countries" */
export type Countries_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "countries" */
export type Countries_Mutation_Response = {
   __typename?: 'countries_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Countries>;
};

/** input type for inserting object relation for remote table "countries" */
export type Countries_Obj_Rel_Insert_Input = {
  data: Countries_Insert_Input;
  on_conflict?: Maybe<Countries_On_Conflict>;
};

/** on conflict condition type for table "countries" */
export type Countries_On_Conflict = {
  constraint: Countries_Constraint;
  update_columns: Array<Countries_Update_Column>;
  where?: Maybe<Countries_Bool_Exp>;
};

/** ordering options when selecting data from "countries" */
export type Countries_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** select columns of table "countries" */
export enum Countries_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "countries" */
export type Countries_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Countries_Stddev_Fields = {
   __typename?: 'countries_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "countries" */
export type Countries_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Countries_Stddev_Pop_Fields = {
   __typename?: 'countries_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "countries" */
export type Countries_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Countries_Stddev_Samp_Fields = {
   __typename?: 'countries_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "countries" */
export type Countries_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Countries_Sum_Fields = {
   __typename?: 'countries_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "countries" */
export type Countries_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "countries" */
export enum Countries_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Countries_Var_Pop_Fields = {
   __typename?: 'countries_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "countries" */
export type Countries_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Countries_Var_Samp_Fields = {
   __typename?: 'countries_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "countries" */
export type Countries_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Countries_Variance_Fields = {
   __typename?: 'countries_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "countries" */
export type Countries_Variance_Order_By = {
  id?: Maybe<Order_By>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "document_types_enum" */
export type Document_Types_Enum = {
   __typename?: 'document_types_enum';
  key: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "document_types_enum" */
export type Document_Types_Enum_Aggregate = {
   __typename?: 'document_types_enum_aggregate';
  aggregate?: Maybe<Document_Types_Enum_Aggregate_Fields>;
  nodes: Array<Document_Types_Enum>;
};

/** aggregate fields of "document_types_enum" */
export type Document_Types_Enum_Aggregate_Fields = {
   __typename?: 'document_types_enum_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Document_Types_Enum_Max_Fields>;
  min?: Maybe<Document_Types_Enum_Min_Fields>;
};


/** aggregate fields of "document_types_enum" */
export type Document_Types_Enum_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Document_Types_Enum_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "document_types_enum" */
export type Document_Types_Enum_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Document_Types_Enum_Max_Order_By>;
  min?: Maybe<Document_Types_Enum_Min_Order_By>;
};

/** input type for inserting array relation for remote table "document_types_enum" */
export type Document_Types_Enum_Arr_Rel_Insert_Input = {
  data: Array<Document_Types_Enum_Insert_Input>;
  on_conflict?: Maybe<Document_Types_Enum_On_Conflict>;
};

/** Boolean expression to filter rows from the table "document_types_enum". All fields are combined with a logical 'AND'. */
export type Document_Types_Enum_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Document_Types_Enum_Bool_Exp>>>;
  _not?: Maybe<Document_Types_Enum_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Document_Types_Enum_Bool_Exp>>>;
  key?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "document_types_enum" */
export enum Document_Types_Enum_Constraint {
  /** unique or primary key constraint */
  DocumentTypesEnumPkey = 'document_types_enum_pkey',
  /** unique or primary key constraint */
  DocumentTypesEnumValueKey = 'document_types_enum_value_key'
}

/** input type for inserting data into table "document_types_enum" */
export type Document_Types_Enum_Insert_Input = {
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Document_Types_Enum_Max_Fields = {
   __typename?: 'document_types_enum_max_fields';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "document_types_enum" */
export type Document_Types_Enum_Max_Order_By = {
  key?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Document_Types_Enum_Min_Fields = {
   __typename?: 'document_types_enum_min_fields';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "document_types_enum" */
export type Document_Types_Enum_Min_Order_By = {
  key?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "document_types_enum" */
export type Document_Types_Enum_Mutation_Response = {
   __typename?: 'document_types_enum_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Document_Types_Enum>;
};

/** input type for inserting object relation for remote table "document_types_enum" */
export type Document_Types_Enum_Obj_Rel_Insert_Input = {
  data: Document_Types_Enum_Insert_Input;
  on_conflict?: Maybe<Document_Types_Enum_On_Conflict>;
};

/** on conflict condition type for table "document_types_enum" */
export type Document_Types_Enum_On_Conflict = {
  constraint: Document_Types_Enum_Constraint;
  update_columns: Array<Document_Types_Enum_Update_Column>;
  where?: Maybe<Document_Types_Enum_Bool_Exp>;
};

/** ordering options when selecting data from "document_types_enum" */
export type Document_Types_Enum_Order_By = {
  key?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** select columns of table "document_types_enum" */
export enum Document_Types_Enum_Select_Column {
  /** column name */
  Key = 'key',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "document_types_enum" */
export type Document_Types_Enum_Set_Input = {
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "document_types_enum" */
export enum Document_Types_Enum_Update_Column {
  /** column name */
  Key = 'key',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "documents" */
export type Documents = {
   __typename?: 'documents';
  birthday: Scalars['date'];
  country_id: Scalars['Int'];
  guest_id: Scalars['Int'];
  id: Scalars['Int'];
};

/** aggregated selection of "documents" */
export type Documents_Aggregate = {
   __typename?: 'documents_aggregate';
  aggregate?: Maybe<Documents_Aggregate_Fields>;
  nodes: Array<Documents>;
};

/** aggregate fields of "documents" */
export type Documents_Aggregate_Fields = {
   __typename?: 'documents_aggregate_fields';
  avg?: Maybe<Documents_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Documents_Max_Fields>;
  min?: Maybe<Documents_Min_Fields>;
  stddev?: Maybe<Documents_Stddev_Fields>;
  stddev_pop?: Maybe<Documents_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Documents_Stddev_Samp_Fields>;
  sum?: Maybe<Documents_Sum_Fields>;
  var_pop?: Maybe<Documents_Var_Pop_Fields>;
  var_samp?: Maybe<Documents_Var_Samp_Fields>;
  variance?: Maybe<Documents_Variance_Fields>;
};


/** aggregate fields of "documents" */
export type Documents_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Documents_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "documents" */
export type Documents_Aggregate_Order_By = {
  avg?: Maybe<Documents_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Documents_Max_Order_By>;
  min?: Maybe<Documents_Min_Order_By>;
  stddev?: Maybe<Documents_Stddev_Order_By>;
  stddev_pop?: Maybe<Documents_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Documents_Stddev_Samp_Order_By>;
  sum?: Maybe<Documents_Sum_Order_By>;
  var_pop?: Maybe<Documents_Var_Pop_Order_By>;
  var_samp?: Maybe<Documents_Var_Samp_Order_By>;
  variance?: Maybe<Documents_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "documents" */
export type Documents_Arr_Rel_Insert_Input = {
  data: Array<Documents_Insert_Input>;
  on_conflict?: Maybe<Documents_On_Conflict>;
};

/** aggregate avg on columns */
export type Documents_Avg_Fields = {
   __typename?: 'documents_avg_fields';
  country_id?: Maybe<Scalars['Float']>;
  guest_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "documents" */
export type Documents_Avg_Order_By = {
  country_id?: Maybe<Order_By>;
  guest_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "documents". All fields are combined with a logical 'AND'. */
export type Documents_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Documents_Bool_Exp>>>;
  _not?: Maybe<Documents_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Documents_Bool_Exp>>>;
  birthday?: Maybe<Date_Comparison_Exp>;
  country_id?: Maybe<Int_Comparison_Exp>;
  guest_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "documents" */
export enum Documents_Constraint {
  /** unique or primary key constraint */
  DocumentsPkey = 'documents_pkey'
}

/** input type for incrementing integer columne in table "documents" */
export type Documents_Inc_Input = {
  country_id?: Maybe<Scalars['Int']>;
  guest_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "documents" */
export type Documents_Insert_Input = {
  birthday?: Maybe<Scalars['date']>;
  country_id?: Maybe<Scalars['Int']>;
  guest_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Documents_Max_Fields = {
   __typename?: 'documents_max_fields';
  birthday?: Maybe<Scalars['date']>;
  country_id?: Maybe<Scalars['Int']>;
  guest_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "documents" */
export type Documents_Max_Order_By = {
  birthday?: Maybe<Order_By>;
  country_id?: Maybe<Order_By>;
  guest_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Documents_Min_Fields = {
   __typename?: 'documents_min_fields';
  birthday?: Maybe<Scalars['date']>;
  country_id?: Maybe<Scalars['Int']>;
  guest_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "documents" */
export type Documents_Min_Order_By = {
  birthday?: Maybe<Order_By>;
  country_id?: Maybe<Order_By>;
  guest_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "documents" */
export type Documents_Mutation_Response = {
   __typename?: 'documents_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Documents>;
};

/** input type for inserting object relation for remote table "documents" */
export type Documents_Obj_Rel_Insert_Input = {
  data: Documents_Insert_Input;
  on_conflict?: Maybe<Documents_On_Conflict>;
};

/** on conflict condition type for table "documents" */
export type Documents_On_Conflict = {
  constraint: Documents_Constraint;
  update_columns: Array<Documents_Update_Column>;
  where?: Maybe<Documents_Bool_Exp>;
};

/** ordering options when selecting data from "documents" */
export type Documents_Order_By = {
  birthday?: Maybe<Order_By>;
  country_id?: Maybe<Order_By>;
  guest_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** select columns of table "documents" */
export enum Documents_Select_Column {
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  GuestId = 'guest_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "documents" */
export type Documents_Set_Input = {
  birthday?: Maybe<Scalars['date']>;
  country_id?: Maybe<Scalars['Int']>;
  guest_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Documents_Stddev_Fields = {
   __typename?: 'documents_stddev_fields';
  country_id?: Maybe<Scalars['Float']>;
  guest_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "documents" */
export type Documents_Stddev_Order_By = {
  country_id?: Maybe<Order_By>;
  guest_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Documents_Stddev_Pop_Fields = {
   __typename?: 'documents_stddev_pop_fields';
  country_id?: Maybe<Scalars['Float']>;
  guest_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "documents" */
export type Documents_Stddev_Pop_Order_By = {
  country_id?: Maybe<Order_By>;
  guest_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Documents_Stddev_Samp_Fields = {
   __typename?: 'documents_stddev_samp_fields';
  country_id?: Maybe<Scalars['Float']>;
  guest_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "documents" */
export type Documents_Stddev_Samp_Order_By = {
  country_id?: Maybe<Order_By>;
  guest_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Documents_Sum_Fields = {
   __typename?: 'documents_sum_fields';
  country_id?: Maybe<Scalars['Int']>;
  guest_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "documents" */
export type Documents_Sum_Order_By = {
  country_id?: Maybe<Order_By>;
  guest_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "documents" */
export enum Documents_Update_Column {
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  GuestId = 'guest_id',
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Documents_Var_Pop_Fields = {
   __typename?: 'documents_var_pop_fields';
  country_id?: Maybe<Scalars['Float']>;
  guest_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "documents" */
export type Documents_Var_Pop_Order_By = {
  country_id?: Maybe<Order_By>;
  guest_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Documents_Var_Samp_Fields = {
   __typename?: 'documents_var_samp_fields';
  country_id?: Maybe<Scalars['Float']>;
  guest_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "documents" */
export type Documents_Var_Samp_Order_By = {
  country_id?: Maybe<Order_By>;
  guest_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Documents_Variance_Fields = {
   __typename?: 'documents_variance_fields';
  country_id?: Maybe<Scalars['Float']>;
  guest_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "documents" */
export type Documents_Variance_Order_By = {
  country_id?: Maybe<Order_By>;
  guest_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/**
 * Table of guests
 * 
 * 
 * columns and relationships of "guests"
 */
export type Guests = {
   __typename?: 'guests';
  /** An object relationship */
  country?: Maybe<Countries>;
  country_id: Scalars['Int'];
  /** An object relationship */
  document?: Maybe<Documents>;
  document_id: Scalars['Int'];
  first_name: Scalars['String'];
  id: Scalars['Int'];
  last_name: Scalars['String'];
  visa_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "guests" */
export type Guests_Aggregate = {
   __typename?: 'guests_aggregate';
  aggregate?: Maybe<Guests_Aggregate_Fields>;
  nodes: Array<Guests>;
};

/** aggregate fields of "guests" */
export type Guests_Aggregate_Fields = {
   __typename?: 'guests_aggregate_fields';
  avg?: Maybe<Guests_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Guests_Max_Fields>;
  min?: Maybe<Guests_Min_Fields>;
  stddev?: Maybe<Guests_Stddev_Fields>;
  stddev_pop?: Maybe<Guests_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Guests_Stddev_Samp_Fields>;
  sum?: Maybe<Guests_Sum_Fields>;
  var_pop?: Maybe<Guests_Var_Pop_Fields>;
  var_samp?: Maybe<Guests_Var_Samp_Fields>;
  variance?: Maybe<Guests_Variance_Fields>;
};


/** aggregate fields of "guests" */
export type Guests_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Guests_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "guests" */
export type Guests_Aggregate_Order_By = {
  avg?: Maybe<Guests_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Guests_Max_Order_By>;
  min?: Maybe<Guests_Min_Order_By>;
  stddev?: Maybe<Guests_Stddev_Order_By>;
  stddev_pop?: Maybe<Guests_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Guests_Stddev_Samp_Order_By>;
  sum?: Maybe<Guests_Sum_Order_By>;
  var_pop?: Maybe<Guests_Var_Pop_Order_By>;
  var_samp?: Maybe<Guests_Var_Samp_Order_By>;
  variance?: Maybe<Guests_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "guests" */
export type Guests_Arr_Rel_Insert_Input = {
  data: Array<Guests_Insert_Input>;
  on_conflict?: Maybe<Guests_On_Conflict>;
};

/** aggregate avg on columns */
export type Guests_Avg_Fields = {
   __typename?: 'guests_avg_fields';
  country_id?: Maybe<Scalars['Float']>;
  document_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  visa_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "guests" */
export type Guests_Avg_Order_By = {
  country_id?: Maybe<Order_By>;
  document_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  visa_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "guests". All fields are combined with a logical 'AND'. */
export type Guests_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Guests_Bool_Exp>>>;
  _not?: Maybe<Guests_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Guests_Bool_Exp>>>;
  country?: Maybe<Countries_Bool_Exp>;
  country_id?: Maybe<Int_Comparison_Exp>;
  document?: Maybe<Documents_Bool_Exp>;
  document_id?: Maybe<Int_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  visa_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "guests" */
export enum Guests_Constraint {
  /** unique or primary key constraint */
  GuestsDocumentIdKey = 'guests_document_id_key',
  /** unique or primary key constraint */
  GuestsPkey = 'guests_pkey',
  /** unique or primary key constraint */
  GuestsVisaIdKey = 'guests_visa_id_key'
}

/** input type for incrementing integer columne in table "guests" */
export type Guests_Inc_Input = {
  country_id?: Maybe<Scalars['Int']>;
  document_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  visa_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "guests" */
export type Guests_Insert_Input = {
  country?: Maybe<Countries_Obj_Rel_Insert_Input>;
  country_id?: Maybe<Scalars['Int']>;
  document?: Maybe<Documents_Obj_Rel_Insert_Input>;
  document_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  visa_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Guests_Max_Fields = {
   __typename?: 'guests_max_fields';
  country_id?: Maybe<Scalars['Int']>;
  document_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  visa_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "guests" */
export type Guests_Max_Order_By = {
  country_id?: Maybe<Order_By>;
  document_id?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  visa_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Guests_Min_Fields = {
   __typename?: 'guests_min_fields';
  country_id?: Maybe<Scalars['Int']>;
  document_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  visa_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "guests" */
export type Guests_Min_Order_By = {
  country_id?: Maybe<Order_By>;
  document_id?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  visa_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "guests" */
export type Guests_Mutation_Response = {
   __typename?: 'guests_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Guests>;
};

/** input type for inserting object relation for remote table "guests" */
export type Guests_Obj_Rel_Insert_Input = {
  data: Guests_Insert_Input;
  on_conflict?: Maybe<Guests_On_Conflict>;
};

/** on conflict condition type for table "guests" */
export type Guests_On_Conflict = {
  constraint: Guests_Constraint;
  update_columns: Array<Guests_Update_Column>;
  where?: Maybe<Guests_Bool_Exp>;
};

/** ordering options when selecting data from "guests" */
export type Guests_Order_By = {
  country?: Maybe<Countries_Order_By>;
  country_id?: Maybe<Order_By>;
  document?: Maybe<Documents_Order_By>;
  document_id?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  visa_id?: Maybe<Order_By>;
};

/** select columns of table "guests" */
export enum Guests_Select_Column {
  /** column name */
  CountryId = 'country_id',
  /** column name */
  DocumentId = 'document_id',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  VisaId = 'visa_id'
}

/** input type for updating data in table "guests" */
export type Guests_Set_Input = {
  country_id?: Maybe<Scalars['Int']>;
  document_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  visa_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Guests_Stddev_Fields = {
   __typename?: 'guests_stddev_fields';
  country_id?: Maybe<Scalars['Float']>;
  document_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  visa_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "guests" */
export type Guests_Stddev_Order_By = {
  country_id?: Maybe<Order_By>;
  document_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  visa_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Guests_Stddev_Pop_Fields = {
   __typename?: 'guests_stddev_pop_fields';
  country_id?: Maybe<Scalars['Float']>;
  document_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  visa_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "guests" */
export type Guests_Stddev_Pop_Order_By = {
  country_id?: Maybe<Order_By>;
  document_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  visa_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Guests_Stddev_Samp_Fields = {
   __typename?: 'guests_stddev_samp_fields';
  country_id?: Maybe<Scalars['Float']>;
  document_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  visa_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "guests" */
export type Guests_Stddev_Samp_Order_By = {
  country_id?: Maybe<Order_By>;
  document_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  visa_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Guests_Sum_Fields = {
   __typename?: 'guests_sum_fields';
  country_id?: Maybe<Scalars['Int']>;
  document_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  visa_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "guests" */
export type Guests_Sum_Order_By = {
  country_id?: Maybe<Order_By>;
  document_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  visa_id?: Maybe<Order_By>;
};

/** update columns of table "guests" */
export enum Guests_Update_Column {
  /** column name */
  CountryId = 'country_id',
  /** column name */
  DocumentId = 'document_id',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  VisaId = 'visa_id'
}

/** aggregate var_pop on columns */
export type Guests_Var_Pop_Fields = {
   __typename?: 'guests_var_pop_fields';
  country_id?: Maybe<Scalars['Float']>;
  document_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  visa_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "guests" */
export type Guests_Var_Pop_Order_By = {
  country_id?: Maybe<Order_By>;
  document_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  visa_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Guests_Var_Samp_Fields = {
   __typename?: 'guests_var_samp_fields';
  country_id?: Maybe<Scalars['Float']>;
  document_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  visa_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "guests" */
export type Guests_Var_Samp_Order_By = {
  country_id?: Maybe<Order_By>;
  document_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  visa_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Guests_Variance_Fields = {
   __typename?: 'guests_variance_fields';
  country_id?: Maybe<Scalars['Float']>;
  document_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  visa_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "guests" */
export type Guests_Variance_Order_By = {
  country_id?: Maybe<Order_By>;
  document_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  visa_id?: Maybe<Order_By>;
};

/** columns and relationships of "hotels" */
export type Hotels = {
   __typename?: 'hotels';
  hotel_id: Scalars['Int'];
  location: Scalars['String'];
  /** An object relationship */
  owner?: Maybe<Users>;
  owner_id: Scalars['Int'];
  title: Scalars['String'];
};

/** aggregated selection of "hotels" */
export type Hotels_Aggregate = {
   __typename?: 'hotels_aggregate';
  aggregate?: Maybe<Hotels_Aggregate_Fields>;
  nodes: Array<Hotels>;
};

/** aggregate fields of "hotels" */
export type Hotels_Aggregate_Fields = {
   __typename?: 'hotels_aggregate_fields';
  avg?: Maybe<Hotels_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Hotels_Max_Fields>;
  min?: Maybe<Hotels_Min_Fields>;
  stddev?: Maybe<Hotels_Stddev_Fields>;
  stddev_pop?: Maybe<Hotels_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Hotels_Stddev_Samp_Fields>;
  sum?: Maybe<Hotels_Sum_Fields>;
  var_pop?: Maybe<Hotels_Var_Pop_Fields>;
  var_samp?: Maybe<Hotels_Var_Samp_Fields>;
  variance?: Maybe<Hotels_Variance_Fields>;
};


/** aggregate fields of "hotels" */
export type Hotels_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Hotels_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "hotels" */
export type Hotels_Aggregate_Order_By = {
  avg?: Maybe<Hotels_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Hotels_Max_Order_By>;
  min?: Maybe<Hotels_Min_Order_By>;
  stddev?: Maybe<Hotels_Stddev_Order_By>;
  stddev_pop?: Maybe<Hotels_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Hotels_Stddev_Samp_Order_By>;
  sum?: Maybe<Hotels_Sum_Order_By>;
  var_pop?: Maybe<Hotels_Var_Pop_Order_By>;
  var_samp?: Maybe<Hotels_Var_Samp_Order_By>;
  variance?: Maybe<Hotels_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "hotels" */
export type Hotels_Arr_Rel_Insert_Input = {
  data: Array<Hotels_Insert_Input>;
  on_conflict?: Maybe<Hotels_On_Conflict>;
};

/** aggregate avg on columns */
export type Hotels_Avg_Fields = {
   __typename?: 'hotels_avg_fields';
  hotel_id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "hotels" */
export type Hotels_Avg_Order_By = {
  hotel_id?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "hotels". All fields are combined with a logical 'AND'. */
export type Hotels_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Hotels_Bool_Exp>>>;
  _not?: Maybe<Hotels_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Hotels_Bool_Exp>>>;
  hotel_id?: Maybe<Int_Comparison_Exp>;
  location?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<Users_Bool_Exp>;
  owner_id?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "hotels" */
export enum Hotels_Constraint {
  /** unique or primary key constraint */
  HotelsPkey = 'hotels_pkey'
}

/** input type for incrementing integer columne in table "hotels" */
export type Hotels_Inc_Input = {
  hotel_id?: Maybe<Scalars['Int']>;
  owner_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "hotels" */
export type Hotels_Insert_Input = {
  hotel_id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  owner?: Maybe<Users_Obj_Rel_Insert_Input>;
  owner_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Hotels_Max_Fields = {
   __typename?: 'hotels_max_fields';
  hotel_id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "hotels" */
export type Hotels_Max_Order_By = {
  hotel_id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Hotels_Min_Fields = {
   __typename?: 'hotels_min_fields';
  hotel_id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "hotels" */
export type Hotels_Min_Order_By = {
  hotel_id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "hotels" */
export type Hotels_Mutation_Response = {
   __typename?: 'hotels_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Hotels>;
};

/** input type for inserting object relation for remote table "hotels" */
export type Hotels_Obj_Rel_Insert_Input = {
  data: Hotels_Insert_Input;
  on_conflict?: Maybe<Hotels_On_Conflict>;
};

/** on conflict condition type for table "hotels" */
export type Hotels_On_Conflict = {
  constraint: Hotels_Constraint;
  update_columns: Array<Hotels_Update_Column>;
  where?: Maybe<Hotels_Bool_Exp>;
};

/** ordering options when selecting data from "hotels" */
export type Hotels_Order_By = {
  hotel_id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  owner?: Maybe<Users_Order_By>;
  owner_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** select columns of table "hotels" */
export enum Hotels_Select_Column {
  /** column name */
  HotelId = 'hotel_id',
  /** column name */
  Location = 'location',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "hotels" */
export type Hotels_Set_Input = {
  hotel_id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Hotels_Stddev_Fields = {
   __typename?: 'hotels_stddev_fields';
  hotel_id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "hotels" */
export type Hotels_Stddev_Order_By = {
  hotel_id?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Hotels_Stddev_Pop_Fields = {
   __typename?: 'hotels_stddev_pop_fields';
  hotel_id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "hotels" */
export type Hotels_Stddev_Pop_Order_By = {
  hotel_id?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Hotels_Stddev_Samp_Fields = {
   __typename?: 'hotels_stddev_samp_fields';
  hotel_id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "hotels" */
export type Hotels_Stddev_Samp_Order_By = {
  hotel_id?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Hotels_Sum_Fields = {
   __typename?: 'hotels_sum_fields';
  hotel_id?: Maybe<Scalars['Int']>;
  owner_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "hotels" */
export type Hotels_Sum_Order_By = {
  hotel_id?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
};

/** update columns of table "hotels" */
export enum Hotels_Update_Column {
  /** column name */
  HotelId = 'hotel_id',
  /** column name */
  Location = 'location',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Hotels_Var_Pop_Fields = {
   __typename?: 'hotels_var_pop_fields';
  hotel_id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "hotels" */
export type Hotels_Var_Pop_Order_By = {
  hotel_id?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Hotels_Var_Samp_Fields = {
   __typename?: 'hotels_var_samp_fields';
  hotel_id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "hotels" */
export type Hotels_Var_Samp_Order_By = {
  hotel_id?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Hotels_Variance_Fields = {
   __typename?: 'hotels_variance_fields';
  hotel_id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "hotels" */
export type Hotels_Variance_Order_By = {
  hotel_id?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
   __typename?: 'mutation_root';
  /** delete data from the table: "bookings" */
  delete_bookings?: Maybe<Bookings_Mutation_Response>;
  /** delete data from the table: "countries" */
  delete_countries?: Maybe<Countries_Mutation_Response>;
  /** delete data from the table: "document_types_enum" */
  delete_document_types_enum?: Maybe<Document_Types_Enum_Mutation_Response>;
  /** delete data from the table: "documents" */
  delete_documents?: Maybe<Documents_Mutation_Response>;
  /** delete data from the table: "guests" */
  delete_guests?: Maybe<Guests_Mutation_Response>;
  /** delete data from the table: "hotels" */
  delete_hotels?: Maybe<Hotels_Mutation_Response>;
  /** delete data from the table: "room_types" */
  delete_room_types?: Maybe<Room_Types_Mutation_Response>;
  /** delete data from the table: "rooms" */
  delete_rooms?: Maybe<Rooms_Mutation_Response>;
  /** delete data from the table: "services" */
  delete_services?: Maybe<Services_Mutation_Response>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "bookings" */
  insert_bookings?: Maybe<Bookings_Mutation_Response>;
  /** insert data into the table: "countries" */
  insert_countries?: Maybe<Countries_Mutation_Response>;
  /** insert data into the table: "document_types_enum" */
  insert_document_types_enum?: Maybe<Document_Types_Enum_Mutation_Response>;
  /** insert data into the table: "documents" */
  insert_documents?: Maybe<Documents_Mutation_Response>;
  /** insert data into the table: "guests" */
  insert_guests?: Maybe<Guests_Mutation_Response>;
  /** insert data into the table: "hotels" */
  insert_hotels?: Maybe<Hotels_Mutation_Response>;
  /** insert data into the table: "room_types" */
  insert_room_types?: Maybe<Room_Types_Mutation_Response>;
  /** insert data into the table: "rooms" */
  insert_rooms?: Maybe<Rooms_Mutation_Response>;
  /** insert data into the table: "services" */
  insert_services?: Maybe<Services_Mutation_Response>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** update data of the table: "bookings" */
  update_bookings?: Maybe<Bookings_Mutation_Response>;
  /** update data of the table: "countries" */
  update_countries?: Maybe<Countries_Mutation_Response>;
  /** update data of the table: "document_types_enum" */
  update_document_types_enum?: Maybe<Document_Types_Enum_Mutation_Response>;
  /** update data of the table: "documents" */
  update_documents?: Maybe<Documents_Mutation_Response>;
  /** update data of the table: "guests" */
  update_guests?: Maybe<Guests_Mutation_Response>;
  /** update data of the table: "hotels" */
  update_hotels?: Maybe<Hotels_Mutation_Response>;
  /** update data of the table: "room_types" */
  update_room_types?: Maybe<Room_Types_Mutation_Response>;
  /** update data of the table: "rooms" */
  update_rooms?: Maybe<Rooms_Mutation_Response>;
  /** update data of the table: "services" */
  update_services?: Maybe<Services_Mutation_Response>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootDelete_BookingsArgs = {
  where: Bookings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CountriesArgs = {
  where: Countries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Document_Types_EnumArgs = {
  where: Document_Types_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_DocumentsArgs = {
  where: Documents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_GuestsArgs = {
  where: Guests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_HotelsArgs = {
  where: Hotels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Room_TypesArgs = {
  where: Room_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_RoomsArgs = {
  where: Rooms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ServicesArgs = {
  where: Services_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert_BookingsArgs = {
  objects: Array<Bookings_Insert_Input>;
  on_conflict?: Maybe<Bookings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CountriesArgs = {
  objects: Array<Countries_Insert_Input>;
  on_conflict?: Maybe<Countries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Document_Types_EnumArgs = {
  objects: Array<Document_Types_Enum_Insert_Input>;
  on_conflict?: Maybe<Document_Types_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DocumentsArgs = {
  objects: Array<Documents_Insert_Input>;
  on_conflict?: Maybe<Documents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GuestsArgs = {
  objects: Array<Guests_Insert_Input>;
  on_conflict?: Maybe<Guests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HotelsArgs = {
  objects: Array<Hotels_Insert_Input>;
  on_conflict?: Maybe<Hotels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Room_TypesArgs = {
  objects: Array<Room_Types_Insert_Input>;
  on_conflict?: Maybe<Room_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoomsArgs = {
  objects: Array<Rooms_Insert_Input>;
  on_conflict?: Maybe<Rooms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ServicesArgs = {
  objects: Array<Services_Insert_Input>;
  on_conflict?: Maybe<Services_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_BookingsArgs = {
  _inc?: Maybe<Bookings_Inc_Input>;
  _set?: Maybe<Bookings_Set_Input>;
  where: Bookings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_CountriesArgs = {
  _inc?: Maybe<Countries_Inc_Input>;
  _set?: Maybe<Countries_Set_Input>;
  where: Countries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Document_Types_EnumArgs = {
  _set?: Maybe<Document_Types_Enum_Set_Input>;
  where: Document_Types_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_DocumentsArgs = {
  _inc?: Maybe<Documents_Inc_Input>;
  _set?: Maybe<Documents_Set_Input>;
  where: Documents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_GuestsArgs = {
  _inc?: Maybe<Guests_Inc_Input>;
  _set?: Maybe<Guests_Set_Input>;
  where: Guests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_HotelsArgs = {
  _inc?: Maybe<Hotels_Inc_Input>;
  _set?: Maybe<Hotels_Set_Input>;
  where: Hotels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Room_TypesArgs = {
  _inc?: Maybe<Room_Types_Inc_Input>;
  _set?: Maybe<Room_Types_Set_Input>;
  where: Room_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_RoomsArgs = {
  _inc?: Maybe<Rooms_Inc_Input>;
  _set?: Maybe<Rooms_Set_Input>;
  where: Rooms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ServicesArgs = {
  _inc?: Maybe<Services_Inc_Input>;
  _set?: Maybe<Services_Set_Input>;
  where: Services_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
   __typename?: 'query_root';
  /** fetch data from the table: "bookings" */
  bookings: Array<Bookings>;
  /** fetch aggregated fields from the table: "bookings" */
  bookings_aggregate: Bookings_Aggregate;
  /** fetch data from the table: "bookings" using primary key columns */
  bookings_by_pk?: Maybe<Bookings>;
  /** fetch data from the table: "countries" */
  countries: Array<Countries>;
  /** fetch aggregated fields from the table: "countries" */
  countries_aggregate: Countries_Aggregate;
  /** fetch data from the table: "countries" using primary key columns */
  countries_by_pk?: Maybe<Countries>;
  /** fetch data from the table: "document_types_enum" */
  document_types_enum: Array<Document_Types_Enum>;
  /** fetch aggregated fields from the table: "document_types_enum" */
  document_types_enum_aggregate: Document_Types_Enum_Aggregate;
  /** fetch data from the table: "document_types_enum" using primary key columns */
  document_types_enum_by_pk?: Maybe<Document_Types_Enum>;
  /** fetch data from the table: "documents" */
  documents: Array<Documents>;
  /** fetch aggregated fields from the table: "documents" */
  documents_aggregate: Documents_Aggregate;
  /** fetch data from the table: "documents" using primary key columns */
  documents_by_pk?: Maybe<Documents>;
  /** fetch data from the table: "guests" */
  guests: Array<Guests>;
  /** fetch aggregated fields from the table: "guests" */
  guests_aggregate: Guests_Aggregate;
  /** fetch data from the table: "guests" using primary key columns */
  guests_by_pk?: Maybe<Guests>;
  /** fetch data from the table: "hotels" */
  hotels: Array<Hotels>;
  /** fetch aggregated fields from the table: "hotels" */
  hotels_aggregate: Hotels_Aggregate;
  /** fetch data from the table: "hotels" using primary key columns */
  hotels_by_pk?: Maybe<Hotels>;
  /** fetch data from the table: "room_types" */
  room_types: Array<Room_Types>;
  /** fetch aggregated fields from the table: "room_types" */
  room_types_aggregate: Room_Types_Aggregate;
  /** fetch data from the table: "room_types" using primary key columns */
  room_types_by_pk?: Maybe<Room_Types>;
  /** fetch data from the table: "rooms" */
  rooms: Array<Rooms>;
  /** fetch aggregated fields from the table: "rooms" */
  rooms_aggregate: Rooms_Aggregate;
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>;
  /** fetch data from the table: "services" */
  services: Array<Services>;
  /** fetch aggregated fields from the table: "services" */
  services_aggregate: Services_Aggregate;
  /** fetch data from the table: "services" using primary key columns */
  services_by_pk?: Maybe<Services>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootBookingsArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bookings_Order_By>>;
  where?: Maybe<Bookings_Bool_Exp>;
};


/** query root */
export type Query_RootBookings_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bookings_Order_By>>;
  where?: Maybe<Bookings_Bool_Exp>;
};


/** query root */
export type Query_RootBookings_By_PkArgs = {
  booking_id: Scalars['Int'];
};


/** query root */
export type Query_RootCountriesArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Order_By>>;
  where?: Maybe<Countries_Bool_Exp>;
};


/** query root */
export type Query_RootCountries_AggregateArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Order_By>>;
  where?: Maybe<Countries_Bool_Exp>;
};


/** query root */
export type Query_RootCountries_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootDocument_Types_EnumArgs = {
  distinct_on?: Maybe<Array<Document_Types_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Types_Enum_Order_By>>;
  where?: Maybe<Document_Types_Enum_Bool_Exp>;
};


/** query root */
export type Query_RootDocument_Types_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Document_Types_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Types_Enum_Order_By>>;
  where?: Maybe<Document_Types_Enum_Bool_Exp>;
};


/** query root */
export type Query_RootDocument_Types_Enum_By_PkArgs = {
  key: Scalars['String'];
};


/** query root */
export type Query_RootDocumentsArgs = {
  distinct_on?: Maybe<Array<Documents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Documents_Order_By>>;
  where?: Maybe<Documents_Bool_Exp>;
};


/** query root */
export type Query_RootDocuments_AggregateArgs = {
  distinct_on?: Maybe<Array<Documents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Documents_Order_By>>;
  where?: Maybe<Documents_Bool_Exp>;
};


/** query root */
export type Query_RootDocuments_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootGuestsArgs = {
  distinct_on?: Maybe<Array<Guests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guests_Order_By>>;
  where?: Maybe<Guests_Bool_Exp>;
};


/** query root */
export type Query_RootGuests_AggregateArgs = {
  distinct_on?: Maybe<Array<Guests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guests_Order_By>>;
  where?: Maybe<Guests_Bool_Exp>;
};


/** query root */
export type Query_RootGuests_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootHotelsArgs = {
  distinct_on?: Maybe<Array<Hotels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hotels_Order_By>>;
  where?: Maybe<Hotels_Bool_Exp>;
};


/** query root */
export type Query_RootHotels_AggregateArgs = {
  distinct_on?: Maybe<Array<Hotels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hotels_Order_By>>;
  where?: Maybe<Hotels_Bool_Exp>;
};


/** query root */
export type Query_RootHotels_By_PkArgs = {
  hotel_id: Scalars['Int'];
};


/** query root */
export type Query_RootRoom_TypesArgs = {
  distinct_on?: Maybe<Array<Room_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Room_Types_Order_By>>;
  where?: Maybe<Room_Types_Bool_Exp>;
};


/** query root */
export type Query_RootRoom_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Room_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Room_Types_Order_By>>;
  where?: Maybe<Room_Types_Bool_Exp>;
};


/** query root */
export type Query_RootRoom_Types_By_PkArgs = {
  room_type_id: Scalars['Int'];
};


/** query root */
export type Query_RootRoomsArgs = {
  distinct_on?: Maybe<Array<Rooms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rooms_Order_By>>;
  where?: Maybe<Rooms_Bool_Exp>;
};


/** query root */
export type Query_RootRooms_AggregateArgs = {
  distinct_on?: Maybe<Array<Rooms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rooms_Order_By>>;
  where?: Maybe<Rooms_Bool_Exp>;
};


/** query root */
export type Query_RootRooms_By_PkArgs = {
  room_id: Scalars['Int'];
};


/** query root */
export type Query_RootServicesArgs = {
  distinct_on?: Maybe<Array<Services_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Services_Order_By>>;
  where?: Maybe<Services_Bool_Exp>;
};


/** query root */
export type Query_RootServices_AggregateArgs = {
  distinct_on?: Maybe<Array<Services_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Services_Order_By>>;
  where?: Maybe<Services_Bool_Exp>;
};


/** query root */
export type Query_RootServices_By_PkArgs = {
  sevice_id: Scalars['Int'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

/**
 * Room types
 * 
 * 
 * columns and relationships of "room_types"
 */
export type Room_Types = {
   __typename?: 'room_types';
  room_type_id: Scalars['Int'];
  title: Scalars['String'];
};

/** aggregated selection of "room_types" */
export type Room_Types_Aggregate = {
   __typename?: 'room_types_aggregate';
  aggregate?: Maybe<Room_Types_Aggregate_Fields>;
  nodes: Array<Room_Types>;
};

/** aggregate fields of "room_types" */
export type Room_Types_Aggregate_Fields = {
   __typename?: 'room_types_aggregate_fields';
  avg?: Maybe<Room_Types_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Room_Types_Max_Fields>;
  min?: Maybe<Room_Types_Min_Fields>;
  stddev?: Maybe<Room_Types_Stddev_Fields>;
  stddev_pop?: Maybe<Room_Types_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Room_Types_Stddev_Samp_Fields>;
  sum?: Maybe<Room_Types_Sum_Fields>;
  var_pop?: Maybe<Room_Types_Var_Pop_Fields>;
  var_samp?: Maybe<Room_Types_Var_Samp_Fields>;
  variance?: Maybe<Room_Types_Variance_Fields>;
};


/** aggregate fields of "room_types" */
export type Room_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Room_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "room_types" */
export type Room_Types_Aggregate_Order_By = {
  avg?: Maybe<Room_Types_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Room_Types_Max_Order_By>;
  min?: Maybe<Room_Types_Min_Order_By>;
  stddev?: Maybe<Room_Types_Stddev_Order_By>;
  stddev_pop?: Maybe<Room_Types_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Room_Types_Stddev_Samp_Order_By>;
  sum?: Maybe<Room_Types_Sum_Order_By>;
  var_pop?: Maybe<Room_Types_Var_Pop_Order_By>;
  var_samp?: Maybe<Room_Types_Var_Samp_Order_By>;
  variance?: Maybe<Room_Types_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "room_types" */
export type Room_Types_Arr_Rel_Insert_Input = {
  data: Array<Room_Types_Insert_Input>;
  on_conflict?: Maybe<Room_Types_On_Conflict>;
};

/** aggregate avg on columns */
export type Room_Types_Avg_Fields = {
   __typename?: 'room_types_avg_fields';
  room_type_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "room_types" */
export type Room_Types_Avg_Order_By = {
  room_type_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "room_types". All fields are combined with a logical 'AND'. */
export type Room_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Room_Types_Bool_Exp>>>;
  _not?: Maybe<Room_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Room_Types_Bool_Exp>>>;
  room_type_id?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "room_types" */
export enum Room_Types_Constraint {
  /** unique or primary key constraint */
  RoomTypesPkey = 'room_types_pkey'
}

/** input type for incrementing integer columne in table "room_types" */
export type Room_Types_Inc_Input = {
  room_type_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "room_types" */
export type Room_Types_Insert_Input = {
  room_type_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Room_Types_Max_Fields = {
   __typename?: 'room_types_max_fields';
  room_type_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "room_types" */
export type Room_Types_Max_Order_By = {
  room_type_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Room_Types_Min_Fields = {
   __typename?: 'room_types_min_fields';
  room_type_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "room_types" */
export type Room_Types_Min_Order_By = {
  room_type_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "room_types" */
export type Room_Types_Mutation_Response = {
   __typename?: 'room_types_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Room_Types>;
};

/** input type for inserting object relation for remote table "room_types" */
export type Room_Types_Obj_Rel_Insert_Input = {
  data: Room_Types_Insert_Input;
  on_conflict?: Maybe<Room_Types_On_Conflict>;
};

/** on conflict condition type for table "room_types" */
export type Room_Types_On_Conflict = {
  constraint: Room_Types_Constraint;
  update_columns: Array<Room_Types_Update_Column>;
  where?: Maybe<Room_Types_Bool_Exp>;
};

/** ordering options when selecting data from "room_types" */
export type Room_Types_Order_By = {
  room_type_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** select columns of table "room_types" */
export enum Room_Types_Select_Column {
  /** column name */
  RoomTypeId = 'room_type_id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "room_types" */
export type Room_Types_Set_Input = {
  room_type_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Room_Types_Stddev_Fields = {
   __typename?: 'room_types_stddev_fields';
  room_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "room_types" */
export type Room_Types_Stddev_Order_By = {
  room_type_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Room_Types_Stddev_Pop_Fields = {
   __typename?: 'room_types_stddev_pop_fields';
  room_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "room_types" */
export type Room_Types_Stddev_Pop_Order_By = {
  room_type_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Room_Types_Stddev_Samp_Fields = {
   __typename?: 'room_types_stddev_samp_fields';
  room_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "room_types" */
export type Room_Types_Stddev_Samp_Order_By = {
  room_type_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Room_Types_Sum_Fields = {
   __typename?: 'room_types_sum_fields';
  room_type_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "room_types" */
export type Room_Types_Sum_Order_By = {
  room_type_id?: Maybe<Order_By>;
};

/** update columns of table "room_types" */
export enum Room_Types_Update_Column {
  /** column name */
  RoomTypeId = 'room_type_id',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Room_Types_Var_Pop_Fields = {
   __typename?: 'room_types_var_pop_fields';
  room_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "room_types" */
export type Room_Types_Var_Pop_Order_By = {
  room_type_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Room_Types_Var_Samp_Fields = {
   __typename?: 'room_types_var_samp_fields';
  room_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "room_types" */
export type Room_Types_Var_Samp_Order_By = {
  room_type_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Room_Types_Variance_Fields = {
   __typename?: 'room_types_variance_fields';
  room_type_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "room_types" */
export type Room_Types_Variance_Order_By = {
  room_type_id?: Maybe<Order_By>;
};

/** columns and relationships of "rooms" */
export type Rooms = {
   __typename?: 'rooms';
  number: Scalars['Int'];
  room_id: Scalars['Int'];
  room_type_id: Scalars['Int'];
};

/** aggregated selection of "rooms" */
export type Rooms_Aggregate = {
   __typename?: 'rooms_aggregate';
  aggregate?: Maybe<Rooms_Aggregate_Fields>;
  nodes: Array<Rooms>;
};

/** aggregate fields of "rooms" */
export type Rooms_Aggregate_Fields = {
   __typename?: 'rooms_aggregate_fields';
  avg?: Maybe<Rooms_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Rooms_Max_Fields>;
  min?: Maybe<Rooms_Min_Fields>;
  stddev?: Maybe<Rooms_Stddev_Fields>;
  stddev_pop?: Maybe<Rooms_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rooms_Stddev_Samp_Fields>;
  sum?: Maybe<Rooms_Sum_Fields>;
  var_pop?: Maybe<Rooms_Var_Pop_Fields>;
  var_samp?: Maybe<Rooms_Var_Samp_Fields>;
  variance?: Maybe<Rooms_Variance_Fields>;
};


/** aggregate fields of "rooms" */
export type Rooms_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rooms_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rooms" */
export type Rooms_Aggregate_Order_By = {
  avg?: Maybe<Rooms_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Rooms_Max_Order_By>;
  min?: Maybe<Rooms_Min_Order_By>;
  stddev?: Maybe<Rooms_Stddev_Order_By>;
  stddev_pop?: Maybe<Rooms_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Rooms_Stddev_Samp_Order_By>;
  sum?: Maybe<Rooms_Sum_Order_By>;
  var_pop?: Maybe<Rooms_Var_Pop_Order_By>;
  var_samp?: Maybe<Rooms_Var_Samp_Order_By>;
  variance?: Maybe<Rooms_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "rooms" */
export type Rooms_Arr_Rel_Insert_Input = {
  data: Array<Rooms_Insert_Input>;
  on_conflict?: Maybe<Rooms_On_Conflict>;
};

/** aggregate avg on columns */
export type Rooms_Avg_Fields = {
   __typename?: 'rooms_avg_fields';
  number?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
  room_type_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "rooms" */
export type Rooms_Avg_Order_By = {
  number?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
  room_type_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rooms". All fields are combined with a logical 'AND'. */
export type Rooms_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Rooms_Bool_Exp>>>;
  _not?: Maybe<Rooms_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Rooms_Bool_Exp>>>;
  number?: Maybe<Int_Comparison_Exp>;
  room_id?: Maybe<Int_Comparison_Exp>;
  room_type_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "rooms" */
export enum Rooms_Constraint {
  /** unique or primary key constraint */
  RoomsPkey = 'rooms_pkey'
}

/** input type for incrementing integer columne in table "rooms" */
export type Rooms_Inc_Input = {
  number?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
  room_type_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "rooms" */
export type Rooms_Insert_Input = {
  number?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
  room_type_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Rooms_Max_Fields = {
   __typename?: 'rooms_max_fields';
  number?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
  room_type_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "rooms" */
export type Rooms_Max_Order_By = {
  number?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
  room_type_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Rooms_Min_Fields = {
   __typename?: 'rooms_min_fields';
  number?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
  room_type_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "rooms" */
export type Rooms_Min_Order_By = {
  number?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
  room_type_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "rooms" */
export type Rooms_Mutation_Response = {
   __typename?: 'rooms_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Rooms>;
};

/** input type for inserting object relation for remote table "rooms" */
export type Rooms_Obj_Rel_Insert_Input = {
  data: Rooms_Insert_Input;
  on_conflict?: Maybe<Rooms_On_Conflict>;
};

/** on conflict condition type for table "rooms" */
export type Rooms_On_Conflict = {
  constraint: Rooms_Constraint;
  update_columns: Array<Rooms_Update_Column>;
  where?: Maybe<Rooms_Bool_Exp>;
};

/** ordering options when selecting data from "rooms" */
export type Rooms_Order_By = {
  number?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
  room_type_id?: Maybe<Order_By>;
};

/** select columns of table "rooms" */
export enum Rooms_Select_Column {
  /** column name */
  Number = 'number',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  RoomTypeId = 'room_type_id'
}

/** input type for updating data in table "rooms" */
export type Rooms_Set_Input = {
  number?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
  room_type_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Rooms_Stddev_Fields = {
   __typename?: 'rooms_stddev_fields';
  number?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
  room_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "rooms" */
export type Rooms_Stddev_Order_By = {
  number?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
  room_type_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rooms_Stddev_Pop_Fields = {
   __typename?: 'rooms_stddev_pop_fields';
  number?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
  room_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "rooms" */
export type Rooms_Stddev_Pop_Order_By = {
  number?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
  room_type_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rooms_Stddev_Samp_Fields = {
   __typename?: 'rooms_stddev_samp_fields';
  number?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
  room_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "rooms" */
export type Rooms_Stddev_Samp_Order_By = {
  number?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
  room_type_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Rooms_Sum_Fields = {
   __typename?: 'rooms_sum_fields';
  number?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
  room_type_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "rooms" */
export type Rooms_Sum_Order_By = {
  number?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
  room_type_id?: Maybe<Order_By>;
};

/** update columns of table "rooms" */
export enum Rooms_Update_Column {
  /** column name */
  Number = 'number',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  RoomTypeId = 'room_type_id'
}

/** aggregate var_pop on columns */
export type Rooms_Var_Pop_Fields = {
   __typename?: 'rooms_var_pop_fields';
  number?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
  room_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "rooms" */
export type Rooms_Var_Pop_Order_By = {
  number?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
  room_type_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rooms_Var_Samp_Fields = {
   __typename?: 'rooms_var_samp_fields';
  number?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
  room_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "rooms" */
export type Rooms_Var_Samp_Order_By = {
  number?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
  room_type_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Rooms_Variance_Fields = {
   __typename?: 'rooms_variance_fields';
  number?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
  room_type_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "rooms" */
export type Rooms_Variance_Order_By = {
  number?: Maybe<Order_By>;
  room_id?: Maybe<Order_By>;
  room_type_id?: Maybe<Order_By>;
};

/** columns and relationships of "services" */
export type Services = {
   __typename?: 'services';
  price: Scalars['Int'];
  service_type_id: Scalars['Int'];
  sevice_id: Scalars['Int'];
  title: Scalars['String'];
};

/** aggregated selection of "services" */
export type Services_Aggregate = {
   __typename?: 'services_aggregate';
  aggregate?: Maybe<Services_Aggregate_Fields>;
  nodes: Array<Services>;
};

/** aggregate fields of "services" */
export type Services_Aggregate_Fields = {
   __typename?: 'services_aggregate_fields';
  avg?: Maybe<Services_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Services_Max_Fields>;
  min?: Maybe<Services_Min_Fields>;
  stddev?: Maybe<Services_Stddev_Fields>;
  stddev_pop?: Maybe<Services_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Services_Stddev_Samp_Fields>;
  sum?: Maybe<Services_Sum_Fields>;
  var_pop?: Maybe<Services_Var_Pop_Fields>;
  var_samp?: Maybe<Services_Var_Samp_Fields>;
  variance?: Maybe<Services_Variance_Fields>;
};


/** aggregate fields of "services" */
export type Services_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Services_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "services" */
export type Services_Aggregate_Order_By = {
  avg?: Maybe<Services_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Services_Max_Order_By>;
  min?: Maybe<Services_Min_Order_By>;
  stddev?: Maybe<Services_Stddev_Order_By>;
  stddev_pop?: Maybe<Services_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Services_Stddev_Samp_Order_By>;
  sum?: Maybe<Services_Sum_Order_By>;
  var_pop?: Maybe<Services_Var_Pop_Order_By>;
  var_samp?: Maybe<Services_Var_Samp_Order_By>;
  variance?: Maybe<Services_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "services" */
export type Services_Arr_Rel_Insert_Input = {
  data: Array<Services_Insert_Input>;
  on_conflict?: Maybe<Services_On_Conflict>;
};

/** aggregate avg on columns */
export type Services_Avg_Fields = {
   __typename?: 'services_avg_fields';
  price?: Maybe<Scalars['Float']>;
  service_type_id?: Maybe<Scalars['Float']>;
  sevice_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "services" */
export type Services_Avg_Order_By = {
  price?: Maybe<Order_By>;
  service_type_id?: Maybe<Order_By>;
  sevice_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "services". All fields are combined with a logical 'AND'. */
export type Services_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Services_Bool_Exp>>>;
  _not?: Maybe<Services_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Services_Bool_Exp>>>;
  price?: Maybe<Int_Comparison_Exp>;
  service_type_id?: Maybe<Int_Comparison_Exp>;
  sevice_id?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "services" */
export enum Services_Constraint {
  /** unique or primary key constraint */
  ServicesPkey = 'services_pkey'
}

/** input type for incrementing integer columne in table "services" */
export type Services_Inc_Input = {
  price?: Maybe<Scalars['Int']>;
  service_type_id?: Maybe<Scalars['Int']>;
  sevice_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "services" */
export type Services_Insert_Input = {
  price?: Maybe<Scalars['Int']>;
  service_type_id?: Maybe<Scalars['Int']>;
  sevice_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Services_Max_Fields = {
   __typename?: 'services_max_fields';
  price?: Maybe<Scalars['Int']>;
  service_type_id?: Maybe<Scalars['Int']>;
  sevice_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "services" */
export type Services_Max_Order_By = {
  price?: Maybe<Order_By>;
  service_type_id?: Maybe<Order_By>;
  sevice_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Services_Min_Fields = {
   __typename?: 'services_min_fields';
  price?: Maybe<Scalars['Int']>;
  service_type_id?: Maybe<Scalars['Int']>;
  sevice_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "services" */
export type Services_Min_Order_By = {
  price?: Maybe<Order_By>;
  service_type_id?: Maybe<Order_By>;
  sevice_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "services" */
export type Services_Mutation_Response = {
   __typename?: 'services_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Services>;
};

/** input type for inserting object relation for remote table "services" */
export type Services_Obj_Rel_Insert_Input = {
  data: Services_Insert_Input;
  on_conflict?: Maybe<Services_On_Conflict>;
};

/** on conflict condition type for table "services" */
export type Services_On_Conflict = {
  constraint: Services_Constraint;
  update_columns: Array<Services_Update_Column>;
  where?: Maybe<Services_Bool_Exp>;
};

/** ordering options when selecting data from "services" */
export type Services_Order_By = {
  price?: Maybe<Order_By>;
  service_type_id?: Maybe<Order_By>;
  sevice_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** select columns of table "services" */
export enum Services_Select_Column {
  /** column name */
  Price = 'price',
  /** column name */
  ServiceTypeId = 'service_type_id',
  /** column name */
  SeviceId = 'sevice_id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "services" */
export type Services_Set_Input = {
  price?: Maybe<Scalars['Int']>;
  service_type_id?: Maybe<Scalars['Int']>;
  sevice_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Services_Stddev_Fields = {
   __typename?: 'services_stddev_fields';
  price?: Maybe<Scalars['Float']>;
  service_type_id?: Maybe<Scalars['Float']>;
  sevice_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "services" */
export type Services_Stddev_Order_By = {
  price?: Maybe<Order_By>;
  service_type_id?: Maybe<Order_By>;
  sevice_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Services_Stddev_Pop_Fields = {
   __typename?: 'services_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
  service_type_id?: Maybe<Scalars['Float']>;
  sevice_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "services" */
export type Services_Stddev_Pop_Order_By = {
  price?: Maybe<Order_By>;
  service_type_id?: Maybe<Order_By>;
  sevice_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Services_Stddev_Samp_Fields = {
   __typename?: 'services_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
  service_type_id?: Maybe<Scalars['Float']>;
  sevice_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "services" */
export type Services_Stddev_Samp_Order_By = {
  price?: Maybe<Order_By>;
  service_type_id?: Maybe<Order_By>;
  sevice_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Services_Sum_Fields = {
   __typename?: 'services_sum_fields';
  price?: Maybe<Scalars['Int']>;
  service_type_id?: Maybe<Scalars['Int']>;
  sevice_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "services" */
export type Services_Sum_Order_By = {
  price?: Maybe<Order_By>;
  service_type_id?: Maybe<Order_By>;
  sevice_id?: Maybe<Order_By>;
};

/** update columns of table "services" */
export enum Services_Update_Column {
  /** column name */
  Price = 'price',
  /** column name */
  ServiceTypeId = 'service_type_id',
  /** column name */
  SeviceId = 'sevice_id',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Services_Var_Pop_Fields = {
   __typename?: 'services_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
  service_type_id?: Maybe<Scalars['Float']>;
  sevice_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "services" */
export type Services_Var_Pop_Order_By = {
  price?: Maybe<Order_By>;
  service_type_id?: Maybe<Order_By>;
  sevice_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Services_Var_Samp_Fields = {
   __typename?: 'services_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
  service_type_id?: Maybe<Scalars['Float']>;
  sevice_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "services" */
export type Services_Var_Samp_Order_By = {
  price?: Maybe<Order_By>;
  service_type_id?: Maybe<Order_By>;
  sevice_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Services_Variance_Fields = {
   __typename?: 'services_variance_fields';
  price?: Maybe<Scalars['Float']>;
  service_type_id?: Maybe<Scalars['Float']>;
  sevice_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "services" */
export type Services_Variance_Order_By = {
  price?: Maybe<Order_By>;
  service_type_id?: Maybe<Order_By>;
  sevice_id?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
   __typename?: 'subscription_root';
  /** fetch data from the table: "bookings" */
  bookings: Array<Bookings>;
  /** fetch aggregated fields from the table: "bookings" */
  bookings_aggregate: Bookings_Aggregate;
  /** fetch data from the table: "bookings" using primary key columns */
  bookings_by_pk?: Maybe<Bookings>;
  /** fetch data from the table: "countries" */
  countries: Array<Countries>;
  /** fetch aggregated fields from the table: "countries" */
  countries_aggregate: Countries_Aggregate;
  /** fetch data from the table: "countries" using primary key columns */
  countries_by_pk?: Maybe<Countries>;
  /** fetch data from the table: "document_types_enum" */
  document_types_enum: Array<Document_Types_Enum>;
  /** fetch aggregated fields from the table: "document_types_enum" */
  document_types_enum_aggregate: Document_Types_Enum_Aggregate;
  /** fetch data from the table: "document_types_enum" using primary key columns */
  document_types_enum_by_pk?: Maybe<Document_Types_Enum>;
  /** fetch data from the table: "documents" */
  documents: Array<Documents>;
  /** fetch aggregated fields from the table: "documents" */
  documents_aggregate: Documents_Aggregate;
  /** fetch data from the table: "documents" using primary key columns */
  documents_by_pk?: Maybe<Documents>;
  /** fetch data from the table: "guests" */
  guests: Array<Guests>;
  /** fetch aggregated fields from the table: "guests" */
  guests_aggregate: Guests_Aggregate;
  /** fetch data from the table: "guests" using primary key columns */
  guests_by_pk?: Maybe<Guests>;
  /** fetch data from the table: "hotels" */
  hotels: Array<Hotels>;
  /** fetch aggregated fields from the table: "hotels" */
  hotels_aggregate: Hotels_Aggregate;
  /** fetch data from the table: "hotels" using primary key columns */
  hotels_by_pk?: Maybe<Hotels>;
  /** fetch data from the table: "room_types" */
  room_types: Array<Room_Types>;
  /** fetch aggregated fields from the table: "room_types" */
  room_types_aggregate: Room_Types_Aggregate;
  /** fetch data from the table: "room_types" using primary key columns */
  room_types_by_pk?: Maybe<Room_Types>;
  /** fetch data from the table: "rooms" */
  rooms: Array<Rooms>;
  /** fetch aggregated fields from the table: "rooms" */
  rooms_aggregate: Rooms_Aggregate;
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>;
  /** fetch data from the table: "services" */
  services: Array<Services>;
  /** fetch aggregated fields from the table: "services" */
  services_aggregate: Services_Aggregate;
  /** fetch data from the table: "services" using primary key columns */
  services_by_pk?: Maybe<Services>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootBookingsArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bookings_Order_By>>;
  where?: Maybe<Bookings_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBookings_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bookings_Order_By>>;
  where?: Maybe<Bookings_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBookings_By_PkArgs = {
  booking_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCountriesArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Order_By>>;
  where?: Maybe<Countries_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCountries_AggregateArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Order_By>>;
  where?: Maybe<Countries_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCountries_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootDocument_Types_EnumArgs = {
  distinct_on?: Maybe<Array<Document_Types_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Types_Enum_Order_By>>;
  where?: Maybe<Document_Types_Enum_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDocument_Types_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Document_Types_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Types_Enum_Order_By>>;
  where?: Maybe<Document_Types_Enum_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDocument_Types_Enum_By_PkArgs = {
  key: Scalars['String'];
};


/** subscription root */
export type Subscription_RootDocumentsArgs = {
  distinct_on?: Maybe<Array<Documents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Documents_Order_By>>;
  where?: Maybe<Documents_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDocuments_AggregateArgs = {
  distinct_on?: Maybe<Array<Documents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Documents_Order_By>>;
  where?: Maybe<Documents_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDocuments_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootGuestsArgs = {
  distinct_on?: Maybe<Array<Guests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guests_Order_By>>;
  where?: Maybe<Guests_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuests_AggregateArgs = {
  distinct_on?: Maybe<Array<Guests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guests_Order_By>>;
  where?: Maybe<Guests_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuests_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootHotelsArgs = {
  distinct_on?: Maybe<Array<Hotels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hotels_Order_By>>;
  where?: Maybe<Hotels_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHotels_AggregateArgs = {
  distinct_on?: Maybe<Array<Hotels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hotels_Order_By>>;
  where?: Maybe<Hotels_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHotels_By_PkArgs = {
  hotel_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRoom_TypesArgs = {
  distinct_on?: Maybe<Array<Room_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Room_Types_Order_By>>;
  where?: Maybe<Room_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoom_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Room_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Room_Types_Order_By>>;
  where?: Maybe<Room_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoom_Types_By_PkArgs = {
  room_type_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRoomsArgs = {
  distinct_on?: Maybe<Array<Rooms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rooms_Order_By>>;
  where?: Maybe<Rooms_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRooms_AggregateArgs = {
  distinct_on?: Maybe<Array<Rooms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rooms_Order_By>>;
  where?: Maybe<Rooms_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRooms_By_PkArgs = {
  room_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootServicesArgs = {
  distinct_on?: Maybe<Array<Services_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Services_Order_By>>;
  where?: Maybe<Services_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootServices_AggregateArgs = {
  distinct_on?: Maybe<Array<Services_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Services_Order_By>>;
  where?: Maybe<Services_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootServices_By_PkArgs = {
  sevice_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

/**
 * Internal system users table
 * 
 * 
 * columns and relationships of "users"
 */
export type Users = {
   __typename?: 'users';
  first_name: Scalars['String'];
  id: Scalars['Int'];
  last_name: Scalars['String'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
   __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
   __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
  stddev?: Maybe<Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Users_Sum_Order_By>;
  var_pop?: Maybe<Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Users_Var_Samp_Order_By>;
  variance?: Maybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
   __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing integer columne in table "users" */
export type Users_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
   __typename?: 'users_max_fields';
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
   __typename?: 'users_min_fields';
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
   __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
   __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
   __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
   __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
   __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
   __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
   __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
   __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type BookingFragment = { __typename?: 'bookings', booking_id: number, date_end: any, date_start: any, guest_id: number, room_id: number, guest?: Maybe<(
    { __typename?: 'guests' }
    & GuestsListFieldsFragment
  )>, room?: Maybe<{ __typename?: 'rooms', number: number, room_id: number }> };

export type FetchBookingsQueryVariables = {
  startDate: Scalars['date'];
  endDate: Scalars['date'];
};


export type FetchBookingsQuery = { __typename?: 'query_root', bookings: Array<(
    { __typename?: 'bookings' }
    & BookingFragment
  )>, rooms: Array<{ __typename?: 'rooms', number: number, room_id: number }> };

export type GuestsListFieldsFragment = { __typename?: 'guests', id: number, firstName: string, lastName: string, country?: Maybe<{ __typename?: 'countries', id: number, name: string }> };

export type FetchGuestsQueryVariables = {};


export type FetchGuestsQuery = { __typename?: 'query_root', guests: Array<(
    { __typename?: 'guests' }
    & GuestsListFieldsFragment
  )> };

export type InsertGuestMutationVariables = {
  objects: Array<Guests_Insert_Input>;
};


export type InsertGuestMutation = { __typename?: 'mutation_root', insert_guests?: Maybe<{ __typename?: 'guests_mutation_response', returning: Array<(
      { __typename?: 'guests' }
      & GuestsListFieldsFragment
    )> }> };

export type HotelFieldsFragment = { __typename?: 'hotels', hotel_id: number, location: string, owner_id: number, title: string, owner?: Maybe<{ __typename?: 'users', first_name: string, id: number, last_name: string }> };

export type FetchHotelsQueryVariables = {};


export type FetchHotelsQuery = { __typename?: 'query_root', hotels: Array<(
    { __typename?: 'hotels' }
    & HotelFieldsFragment
  )> };

export type FetchHotelsByPkQueryVariables = {
  id: Scalars['Int'];
};


export type FetchHotelsByPkQuery = { __typename?: 'query_root', hotels_by_pk?: Maybe<(
    { __typename?: 'hotels' }
    & HotelFieldsFragment
  )> };

export type CreateHotelMutationVariables = {
  objects: Array<Hotels_Insert_Input>;
};


export type CreateHotelMutation = { __typename?: 'mutation_root', insert_hotels?: Maybe<{ __typename?: 'hotels_mutation_response', returning: Array<(
      { __typename?: 'hotels' }
      & HotelFieldsFragment
    )> }> };

export const GuestsListFieldsFragmentDoc = gql`
    fragment GuestsListFields on guests {
  id
  firstName: first_name
  lastName: last_name
  country {
    id
    name
  }
}
    `;
export const BookingFragmentDoc = gql`
    fragment Booking on bookings {
  booking_id
  date_end
  date_start
  guest_id
  room_id
  guest {
    ...GuestsListFields
  }
  room {
    number
    room_id
  }
}
    ${GuestsListFieldsFragmentDoc}`;
export const HotelFieldsFragmentDoc = gql`
    fragment HotelFields on hotels {
  hotel_id
  location
  owner {
    first_name
    id
    last_name
  }
  owner_id
  title
}
    `;
export const FetchBookingsDocument = gql`
    query fetchBookings($startDate: date!, $endDate: date!) {
  bookings(where: {_or: {date_start: {_gte: $startDate}, date_end: {_lte: $endDate}}}) {
    ...Booking
  }
  rooms {
    number
    room_id
  }
}
    ${BookingFragmentDoc}`;

/**
 * __useFetchBookingsQuery__
 *
 * To run a query within a React component, call `useFetchBookingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchBookingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchBookingsQuery({
 *   variables: {
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useFetchBookingsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchBookingsQuery, FetchBookingsQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchBookingsQuery, FetchBookingsQueryVariables>(FetchBookingsDocument, baseOptions);
      }
export function useFetchBookingsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchBookingsQuery, FetchBookingsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchBookingsQuery, FetchBookingsQueryVariables>(FetchBookingsDocument, baseOptions);
        }
export type FetchBookingsQueryHookResult = ReturnType<typeof useFetchBookingsQuery>;
export type FetchBookingsLazyQueryHookResult = ReturnType<typeof useFetchBookingsLazyQuery>;
export type FetchBookingsQueryResult = ApolloReactCommon.QueryResult<FetchBookingsQuery, FetchBookingsQueryVariables>;
export const FetchGuestsDocument = gql`
    query fetchGuests {
  guests {
    ...GuestsListFields
  }
}
    ${GuestsListFieldsFragmentDoc}`;

/**
 * __useFetchGuestsQuery__
 *
 * To run a query within a React component, call `useFetchGuestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchGuestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchGuestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchGuestsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchGuestsQuery, FetchGuestsQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchGuestsQuery, FetchGuestsQueryVariables>(FetchGuestsDocument, baseOptions);
      }
export function useFetchGuestsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchGuestsQuery, FetchGuestsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchGuestsQuery, FetchGuestsQueryVariables>(FetchGuestsDocument, baseOptions);
        }
export type FetchGuestsQueryHookResult = ReturnType<typeof useFetchGuestsQuery>;
export type FetchGuestsLazyQueryHookResult = ReturnType<typeof useFetchGuestsLazyQuery>;
export type FetchGuestsQueryResult = ApolloReactCommon.QueryResult<FetchGuestsQuery, FetchGuestsQueryVariables>;
export const InsertGuestDocument = gql`
    mutation insertGuest($objects: [guests_insert_input!]!) {
  insert_guests(objects: $objects) {
    returning {
      ...GuestsListFields
    }
  }
}
    ${GuestsListFieldsFragmentDoc}`;
export type InsertGuestMutationFn = ApolloReactCommon.MutationFunction<InsertGuestMutation, InsertGuestMutationVariables>;

/**
 * __useInsertGuestMutation__
 *
 * To run a mutation, you first call `useInsertGuestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertGuestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertGuestMutation, { data, loading, error }] = useInsertGuestMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useInsertGuestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertGuestMutation, InsertGuestMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertGuestMutation, InsertGuestMutationVariables>(InsertGuestDocument, baseOptions);
      }
export type InsertGuestMutationHookResult = ReturnType<typeof useInsertGuestMutation>;
export type InsertGuestMutationResult = ApolloReactCommon.MutationResult<InsertGuestMutation>;
export type InsertGuestMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertGuestMutation, InsertGuestMutationVariables>;
export const FetchHotelsDocument = gql`
    query fetchHotels {
  hotels {
    ...HotelFields
  }
}
    ${HotelFieldsFragmentDoc}`;

/**
 * __useFetchHotelsQuery__
 *
 * To run a query within a React component, call `useFetchHotelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchHotelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchHotelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchHotelsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchHotelsQuery, FetchHotelsQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchHotelsQuery, FetchHotelsQueryVariables>(FetchHotelsDocument, baseOptions);
      }
export function useFetchHotelsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchHotelsQuery, FetchHotelsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchHotelsQuery, FetchHotelsQueryVariables>(FetchHotelsDocument, baseOptions);
        }
export type FetchHotelsQueryHookResult = ReturnType<typeof useFetchHotelsQuery>;
export type FetchHotelsLazyQueryHookResult = ReturnType<typeof useFetchHotelsLazyQuery>;
export type FetchHotelsQueryResult = ApolloReactCommon.QueryResult<FetchHotelsQuery, FetchHotelsQueryVariables>;
export const FetchHotelsByPkDocument = gql`
    query fetchHotelsByPk($id: Int!) {
  hotels_by_pk(hotel_id: $id) {
    ...HotelFields
  }
}
    ${HotelFieldsFragmentDoc}`;

/**
 * __useFetchHotelsByPkQuery__
 *
 * To run a query within a React component, call `useFetchHotelsByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchHotelsByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchHotelsByPkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFetchHotelsByPkQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchHotelsByPkQuery, FetchHotelsByPkQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchHotelsByPkQuery, FetchHotelsByPkQueryVariables>(FetchHotelsByPkDocument, baseOptions);
      }
export function useFetchHotelsByPkLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchHotelsByPkQuery, FetchHotelsByPkQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchHotelsByPkQuery, FetchHotelsByPkQueryVariables>(FetchHotelsByPkDocument, baseOptions);
        }
export type FetchHotelsByPkQueryHookResult = ReturnType<typeof useFetchHotelsByPkQuery>;
export type FetchHotelsByPkLazyQueryHookResult = ReturnType<typeof useFetchHotelsByPkLazyQuery>;
export type FetchHotelsByPkQueryResult = ApolloReactCommon.QueryResult<FetchHotelsByPkQuery, FetchHotelsByPkQueryVariables>;
export const CreateHotelDocument = gql`
    mutation createHotel($objects: [hotels_insert_input!]!) {
  insert_hotels(objects: $objects) {
    returning {
      ...HotelFields
    }
  }
}
    ${HotelFieldsFragmentDoc}`;
export type CreateHotelMutationFn = ApolloReactCommon.MutationFunction<CreateHotelMutation, CreateHotelMutationVariables>;

/**
 * __useCreateHotelMutation__
 *
 * To run a mutation, you first call `useCreateHotelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHotelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHotelMutation, { data, loading, error }] = useCreateHotelMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useCreateHotelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateHotelMutation, CreateHotelMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateHotelMutation, CreateHotelMutationVariables>(CreateHotelDocument, baseOptions);
      }
export type CreateHotelMutationHookResult = ReturnType<typeof useCreateHotelMutation>;
export type CreateHotelMutationResult = ApolloReactCommon.MutationResult<CreateHotelMutation>;
export type CreateHotelMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateHotelMutation, CreateHotelMutationVariables>;