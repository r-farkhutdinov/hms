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

/**
 * Table of guests
 * 
 * 
 * columns and relationships of "guests"
 */
export type Guests = {
   __typename?: 'guests';
  country_id: Scalars['Int'];
  document_id: Scalars['Int'];
  first_name: Scalars['String'];
  id: Scalars['Int'];
  last_name: Scalars['String'];
  visa_id: Scalars['Int'];
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
  country_id?: Maybe<Int_Comparison_Exp>;
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
  country_id?: Maybe<Scalars['Int']>;
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
  country_id?: Maybe<Order_By>;
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

/** mutation root */
export type Mutation_Root = {
   __typename?: 'mutation_root';
  /** delete data from the table: "guests" */
  delete_guests?: Maybe<Guests_Mutation_Response>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "guests" */
  insert_guests?: Maybe<Guests_Mutation_Response>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** update data of the table: "guests" */
  update_guests?: Maybe<Guests_Mutation_Response>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootDelete_GuestsArgs = {
  where: Guests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert_GuestsArgs = {
  objects: Array<Guests_Insert_Input>;
  on_conflict?: Maybe<Guests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_GuestsArgs = {
  _inc?: Maybe<Guests_Inc_Input>;
  _set?: Maybe<Guests_Set_Input>;
  where: Guests_Bool_Exp;
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
  /** fetch data from the table: "guests" */
  guests: Array<Guests>;
  /** fetch aggregated fields from the table: "guests" */
  guests_aggregate: Guests_Aggregate;
  /** fetch data from the table: "guests" using primary key columns */
  guests_by_pk?: Maybe<Guests>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
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

/** subscription root */
export type Subscription_Root = {
   __typename?: 'subscription_root';
  /** fetch data from the table: "guests" */
  guests: Array<Guests>;
  /** fetch aggregated fields from the table: "guests" */
  guests_aggregate: Guests_Aggregate;
  /** fetch data from the table: "guests" using primary key columns */
  guests_by_pk?: Maybe<Guests>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
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

export type GuestsListFieldsFragment = { __typename?: 'guests', country_id: number, document_id: number, first_name: string, id: number, last_name: string, visa_id: number };

export type FetchGuestsQueryVariables = {};


export type FetchGuestsQuery = { __typename?: 'query_root', guests: Array<(
    { __typename?: 'guests' }
    & GuestsListFieldsFragment
  )> };

export const GuestsListFieldsFragmentDoc = gql`
    fragment GuestsListFields on guests {
  country_id
  document_id
  first_name
  id
  last_name
  visa_id
}
    `;
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