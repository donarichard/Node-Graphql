/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */

import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: bigint;
  Date: Date;
  Json: { [key: string]: any };
  _Any: any;
  _FieldSet: any;
};

export enum CacheControlScope {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC'
}

export type Conversation = {
  __typename?: 'Conversation';
  _id: Scalars['_Any'];
  /** @deprecated Field no longer supported */
  createdAt?: Maybe<Scalars['Date']>;
  memeber?: Maybe<Array<Maybe<User>>>;
  messages?: Maybe<Messages>;
  un_read_messages?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type ConversationMessagesArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type Conversations = {
  __typename?: 'Conversations';
  conversations?: Maybe<Array<Maybe<Conversation>>>;
  pagination?: Maybe<Pagination>;
};

export type CreateMessageMutationResponse = {
  __typename?: 'CreateMessageMutationResponse';
  StatusCode: Scalars['String'];
  conversation?: Maybe<Conversation>;
  message: Scalars['String'];
  status: Scalars['Int'];
};

export type Error = {
  __typename?: 'Error';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type LoginMutationResponse = {
  __typename?: 'LoginMutationResponse';
  StatusCode: Scalars['String'];
  errors?: Maybe<Array<Error>>;
  message: Scalars['String'];
  status: Scalars['Int'];
  token: Scalars['String'];
  user?: Maybe<User>;
};

export type MarkAsReadMutationResponse = {
  __typename?: 'MarkAsReadMutationResponse';
  StatusCode: Scalars['String'];
  message: Scalars['String'];
  status: Scalars['Int'];
};

export type Message = {
  __typename?: 'Message';
  _id: Scalars['_Any'];
  author_id?: Maybe<User>;
  content?: Maybe<Scalars['String']>;
  conversation?: Maybe<Conversation>;
  conversation_id?: Maybe<Scalars['_Any']>;
  createdAt?: Maybe<Scalars['Date']>;
  seenByReceiver?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Messages = {
  __typename?: 'Messages';
  messages?: Maybe<Array<Maybe<Message>>>;
  pagination?: Maybe<Pagination>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMessage: CreateMessageMutationResponse;
  login: LoginMutationResponse;
  markAsReadConversion: MarkAsReadMutationResponse;
  register: RegisterMutationResponse;
};


export type MutationCreateMessageArgs = {
  input: NewMessageInput;
};


export type MutationLoginArgs = {
  input: LoginUserInput;
};


export type MutationMarkAsReadConversionArgs = {
  conversatin_id: Scalars['_Any'];
};


export type MutationRegisterArgs = {
  input: NewUser;
};

export type NewMessageInput = {
  content: Scalars['String'];
  userId: Scalars['_Any'];
};

export type Pagination = {
  __typename?: 'Pagination';
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getAllUsers?: Maybe<Users>;
  me?: Maybe<User>;
  myconversation?: Maybe<Conversations>;
  openConversation?: Maybe<Conversation>;
  openConversationByUserId?: Maybe<Conversation>;
};


export type QueryGetAllUsersArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type QueryMyconversationArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type QueryOpenConversationArgs = {
  conversatin_id: Scalars['_Any'];
};


export type QueryOpenConversationByUserIdArgs = {
  user_id: Scalars['_Any'];
};

export type RegisterMutationResponse = {
  __typename?: 'RegisterMutationResponse';
  StatusCode: Scalars['String'];
  errors?: Maybe<Array<Error>>;
  message: Scalars['String'];
  status: Scalars['Int'];
  token: Scalars['String'];
  user?: Maybe<User>;
};

export enum StatusCode {
  BAD_REQUEST = 'Bad_Request',
  CONFLICT = 'Conflict',
  CREATED = 'Created',
  FORBIDDEN = 'Forbidden',
  INTERNAL_ERROR = 'Internal_Error',
  NOT_FOUND = 'Not_Found',
  OK = 'Ok',
  UNAUTHORIZED = 'Unauthorized'
}

export type Subscription = {
  __typename?: 'Subscription';
  myconversation?: Maybe<Conversations>;
  openConversation?: Maybe<Conversation>;
};


export type SubscriptionMyconversationArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type SubscriptionOpenConversationArgs = {
  conversatin_id: Scalars['_Any'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['_Any'];
  available?: Maybe<Scalars['Boolean']>;
  conversation?: Maybe<Conversation>;
  createdAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  last_ip?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['Date']>;
  location?: Maybe<Array<Maybe<Scalars['Int']>>>;
  login_at?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  username?: Maybe<Scalars['String']>;
};

export type Users = {
  __typename?: 'Users';
  pagination?: Maybe<Pagination>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type NewUser = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BigInt: ResolverTypeWrapper<any>;
  Boolean: ResolverTypeWrapper<any>;
  CacheControlScope: ResolverTypeWrapper<any>;
  Conversation: ResolverTypeWrapper<any>;
  Conversations: ResolverTypeWrapper<any>;
  CreateMessageMutationResponse: ResolverTypeWrapper<any>;
  Date: ResolverTypeWrapper<any>;
  Error: ResolverTypeWrapper<any>;
  Int: ResolverTypeWrapper<any>;
  Json: ResolverTypeWrapper<any>;
  LoginMutationResponse: ResolverTypeWrapper<any>;
  MarkAsReadMutationResponse: ResolverTypeWrapper<any>;
  Message: ResolverTypeWrapper<any>;
  Messages: ResolverTypeWrapper<any>;
  Mutation: ResolverTypeWrapper<{}>;
  NewMessageInput: ResolverTypeWrapper<any>;
  Pagination: ResolverTypeWrapper<any>;
  Query: ResolverTypeWrapper<{}>;
  RegisterMutationResponse: ResolverTypeWrapper<any>;
  StatusCode: ResolverTypeWrapper<any>;
  String: ResolverTypeWrapper<any>;
  Subscription: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<any>;
  Users: ResolverTypeWrapper<any>;
  _Any: ResolverTypeWrapper<any>;
  _FieldSet: ResolverTypeWrapper<any>;
  loginUserInput: ResolverTypeWrapper<any>;
  newUser: ResolverTypeWrapper<any>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BigInt: any;
  Boolean: any;
  Conversation: any;
  Conversations: any;
  CreateMessageMutationResponse: any;
  Date: any;
  Error: any;
  Int: any;
  Json: any;
  LoginMutationResponse: any;
  MarkAsReadMutationResponse: any;
  Message: any;
  Messages: any;
  Mutation: {};
  NewMessageInput: any;
  Pagination: any;
  Query: {};
  RegisterMutationResponse: any;
  String: any;
  Subscription: {};
  User: any;
  Users: any;
  _Any: any;
  _FieldSet: any;
  loginUserInput: any;
  newUser: any;
};

export type CacheControlDirectiveArgs = {
  inheritMaxAge?: Maybe<Scalars['Boolean']>;
  maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>;
};

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ExtendsDirectiveArgs = { };

export type ExtendsDirectiveResolver<Result, Parent, ContextType = any, Args = ExtendsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ExternalDirectiveArgs = { };

export type ExternalDirectiveResolver<Result, Parent, ContextType = any, Args = ExternalDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type KeyDirectiveArgs = {
  fields: Scalars['_FieldSet'];
};

export type KeyDirectiveResolver<Result, Parent, ContextType = any, Args = KeyDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LiveDirectiveArgs = { };

export type LiveDirectiveResolver<Result, Parent, ContextType = any, Args = LiveDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ProvidesDirectiveArgs = {
  fields: Scalars['_FieldSet'];
};

export type ProvidesDirectiveResolver<Result, Parent, ContextType = any, Args = ProvidesDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type RequiresDirectiveArgs = {
  fields: Scalars['_FieldSet'];
};

export type RequiresDirectiveResolver<Result, Parent, ContextType = any, Args = RequiresDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type ConversationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Conversation'] = ResolversParentTypes['Conversation']> = {
  _id?: Resolver<ResolversTypes['_Any'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  memeber?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  messages?: Resolver<Maybe<ResolversTypes['Messages']>, ParentType, ContextType, RequireFields<ConversationMessagesArgs, 'limit' | 'offset'>>;
  un_read_messages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConversationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Conversations'] = ResolversParentTypes['Conversations']> = {
  conversations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Conversation']>>>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['Pagination']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateMessageMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateMessageMutationResponse'] = ResolversParentTypes['CreateMessageMutationResponse']> = {
  StatusCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  conversation?: Resolver<Maybe<ResolversTypes['Conversation']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type ErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = {
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Json'], any> {
  name: 'Json';
}

export type LoginMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginMutationResponse'] = ResolversParentTypes['LoginMutationResponse']> = {
  StatusCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarkAsReadMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarkAsReadMutationResponse'] = ResolversParentTypes['MarkAsReadMutationResponse']> = {
  StatusCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  _id?: Resolver<ResolversTypes['_Any'], ParentType, ContextType>;
  author_id?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conversation?: Resolver<Maybe<ResolversTypes['Conversation']>, ParentType, ContextType>;
  conversation_id?: Resolver<Maybe<ResolversTypes['_Any']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  seenByReceiver?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessagesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Messages'] = ResolversParentTypes['Messages']> = {
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Message']>>>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['Pagination']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createMessage?: Resolver<ResolversTypes['CreateMessageMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateMessageArgs, 'input'>>;
  login?: Resolver<ResolversTypes['LoginMutationResponse'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  markAsReadConversion?: Resolver<ResolversTypes['MarkAsReadMutationResponse'], ParentType, ContextType, RequireFields<MutationMarkAsReadConversionArgs, 'conversatin_id'>>;
  register?: Resolver<ResolversTypes['RegisterMutationResponse'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>;
};

export type PaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pagination'] = ResolversParentTypes['Pagination']> = {
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAllUsers?: Resolver<Maybe<ResolversTypes['Users']>, ParentType, ContextType, RequireFields<QueryGetAllUsersArgs, 'limit' | 'offset'>>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  myconversation?: Resolver<Maybe<ResolversTypes['Conversations']>, ParentType, ContextType, RequireFields<QueryMyconversationArgs, 'limit' | 'offset'>>;
  openConversation?: Resolver<Maybe<ResolversTypes['Conversation']>, ParentType, ContextType, RequireFields<QueryOpenConversationArgs, 'conversatin_id'>>;
  openConversationByUserId?: Resolver<Maybe<ResolversTypes['Conversation']>, ParentType, ContextType, RequireFields<QueryOpenConversationByUserIdArgs, 'user_id'>>;
};

export type RegisterMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterMutationResponse'] = ResolversParentTypes['RegisterMutationResponse']> = {
  StatusCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  myconversation?: SubscriptionResolver<Maybe<ResolversTypes['Conversations']>, "myconversation", ParentType, ContextType, RequireFields<SubscriptionMyconversationArgs, 'limit' | 'offset'>>;
  openConversation?: SubscriptionResolver<Maybe<ResolversTypes['Conversation']>, "openConversation", ParentType, ContextType, RequireFields<SubscriptionOpenConversationArgs, 'conversatin_id'>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<ResolversTypes['_Any'], ParentType, ContextType>;
  available?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  conversation?: Resolver<Maybe<ResolversTypes['Conversation']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_ip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_seen?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  location?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  login_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['Users'] = ResolversParentTypes['Users']> = {
  pagination?: Resolver<Maybe<ResolversTypes['Pagination']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface _AnyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['_Any'], any> {
  name: '_Any';
}

export interface _FieldSetScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['_FieldSet'], any> {
  name: '_FieldSet';
}

export type Resolvers<ContextType = any> = {
  BigInt?: GraphQLScalarType;
  Conversation?: ConversationResolvers<ContextType>;
  Conversations?: ConversationsResolvers<ContextType>;
  CreateMessageMutationResponse?: CreateMessageMutationResponseResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Error?: ErrorResolvers<ContextType>;
  Json?: GraphQLScalarType;
  LoginMutationResponse?: LoginMutationResponseResolvers<ContextType>;
  MarkAsReadMutationResponse?: MarkAsReadMutationResponseResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  Messages?: MessagesResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Pagination?: PaginationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RegisterMutationResponse?: RegisterMutationResponseResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Users?: UsersResolvers<ContextType>;
  _Any?: GraphQLScalarType;
  _FieldSet?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
  extends?: ExtendsDirectiveResolver<any, any, ContextType>;
  external?: ExternalDirectiveResolver<any, any, ContextType>;
  key?: KeyDirectiveResolver<any, any, ContextType>;
  live?: LiveDirectiveResolver<any, any, ContextType>;
  provides?: ProvidesDirectiveResolver<any, any, ContextType>;
  requires?: RequiresDirectiveResolver<any, any, ContextType>;
};
