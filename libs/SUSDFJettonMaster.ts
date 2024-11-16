/* eslint-disable */
import {
  Cell,
  Slice,
  Address,
  Builder,
  beginCell,
  ComputeError,
  TupleItem,
  TupleReader,
  Dictionary,
  contractAddress,
  ContractProvider,
  Sender,
  Contract,
  ContractABI,
  ABIType,
  ABIGetter,
  ABIReceiver,
  TupleBuilder,
  DictionaryValue,
} from "@ton/core";

export type StateInit = {
  $$type: "StateInit";
  code: Cell;
  data: Cell;
};

export function storeStateInit(src: StateInit) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeRef(src.code);
    b_0.storeRef(src.data);
  };
}

export function loadStateInit(slice: Slice) {
  let sc_0 = slice;
  let _code = sc_0.loadRef();
  let _data = sc_0.loadRef();
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
  let _code = source.readCell();
  let _data = source.readCell();
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

function loadGetterTupleStateInit(source: TupleReader) {
  let _code = source.readCell();
  let _data = source.readCell();
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
  let builder = new TupleBuilder();
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
    },
    parse: (src) => {
      return loadStateInit(src.loadRef().beginParse());
    },
  };
}

export type Context = {
  $$type: "Context";
  bounced: boolean;
  sender: Address;
  value: bigint;
  raw: Slice;
};

export function storeContext(src: Context) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounced);
    b_0.storeAddress(src.sender);
    b_0.storeInt(src.value, 257);
    b_0.storeRef(src.raw.asCell());
  };
}

export function loadContext(slice: Slice) {
  let sc_0 = slice;
  let _bounced = sc_0.loadBit();
  let _sender = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _raw = sc_0.loadRef().asSlice();
  return {
    $$type: "Context" as const,
    bounced: _bounced,
    sender: _sender,
    value: _value,
    raw: _raw,
  };
}

function loadTupleContext(source: TupleReader) {
  let _bounced = source.readBoolean();
  let _sender = source.readAddress();
  let _value = source.readBigNumber();
  let _raw = source.readCell().asSlice();
  return {
    $$type: "Context" as const,
    bounced: _bounced,
    sender: _sender,
    value: _value,
    raw: _raw,
  };
}

function loadGetterTupleContext(source: TupleReader) {
  let _bounced = source.readBoolean();
  let _sender = source.readAddress();
  let _value = source.readBigNumber();
  let _raw = source.readCell().asSlice();
  return {
    $$type: "Context" as const,
    bounced: _bounced,
    sender: _sender,
    value: _value,
    raw: _raw,
  };
}

function storeTupleContext(source: Context) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounced);
  builder.writeAddress(source.sender);
  builder.writeNumber(source.value);
  builder.writeSlice(source.raw.asCell());
  return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeContext(src)).endCell());
    },
    parse: (src) => {
      return loadContext(src.loadRef().beginParse());
    },
  };
}

export type SendParameters = {
  $$type: "SendParameters";
  bounce: boolean;
  to: Address;
  value: bigint;
  mode: bigint;
  body: Cell | null;
  code: Cell | null;
  data: Cell | null;
};

export function storeSendParameters(src: SendParameters) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounce);
    b_0.storeAddress(src.to);
    b_0.storeInt(src.value, 257);
    b_0.storeInt(src.mode, 257);
    if (src.body !== null && src.body !== undefined) {
      b_0.storeBit(true).storeRef(src.body);
    } else {
      b_0.storeBit(false);
    }
    if (src.code !== null && src.code !== undefined) {
      b_0.storeBit(true).storeRef(src.code);
    } else {
      b_0.storeBit(false);
    }
    if (src.data !== null && src.data !== undefined) {
      b_0.storeBit(true).storeRef(src.data);
    } else {
      b_0.storeBit(false);
    }
  };
}

export function loadSendParameters(slice: Slice) {
  let sc_0 = slice;
  let _bounce = sc_0.loadBit();
  let _to = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _mode = sc_0.loadIntBig(257);
  let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
  return {
    $$type: "SendParameters" as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function loadTupleSendParameters(source: TupleReader) {
  let _bounce = source.readBoolean();
  let _to = source.readAddress();
  let _value = source.readBigNumber();
  let _mode = source.readBigNumber();
  let _body = source.readCellOpt();
  let _code = source.readCellOpt();
  let _data = source.readCellOpt();
  return {
    $$type: "SendParameters" as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function loadGetterTupleSendParameters(source: TupleReader) {
  let _bounce = source.readBoolean();
  let _to = source.readAddress();
  let _value = source.readBigNumber();
  let _mode = source.readBigNumber();
  let _body = source.readCellOpt();
  let _code = source.readCellOpt();
  let _data = source.readCellOpt();
  return {
    $$type: "SendParameters" as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function storeTupleSendParameters(source: SendParameters) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounce);
  builder.writeAddress(source.to);
  builder.writeNumber(source.value);
  builder.writeNumber(source.mode);
  builder.writeCell(source.body);
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
    },
    parse: (src) => {
      return loadSendParameters(src.loadRef().beginParse());
    },
  };
}

export type ChangeOwner = {
  $$type: "ChangeOwner";
  queryId: bigint;
  newOwner: Address;
};

export function storeChangeOwner(src: ChangeOwner) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2174598809, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.newOwner);
  };
}

export function loadChangeOwner(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2174598809) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  let _newOwner = sc_0.loadAddress();
  return {
    $$type: "ChangeOwner" as const,
    queryId: _queryId,
    newOwner: _newOwner,
  };
}

function loadTupleChangeOwner(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _newOwner = source.readAddress();
  return {
    $$type: "ChangeOwner" as const,
    queryId: _queryId,
    newOwner: _newOwner,
  };
}

function loadGetterTupleChangeOwner(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _newOwner = source.readAddress();
  return {
    $$type: "ChangeOwner" as const,
    queryId: _queryId,
    newOwner: _newOwner,
  };
}

function storeTupleChangeOwner(source: ChangeOwner) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.newOwner);
  return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
    },
    parse: (src) => {
      return loadChangeOwner(src.loadRef().beginParse());
    },
  };
}

export type ChangeOwnerOk = {
  $$type: "ChangeOwnerOk";
  queryId: bigint;
  newOwner: Address;
};

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(846932810, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.newOwner);
  };
}

export function loadChangeOwnerOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 846932810) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  let _newOwner = sc_0.loadAddress();
  return {
    $$type: "ChangeOwnerOk" as const,
    queryId: _queryId,
    newOwner: _newOwner,
  };
}

function loadTupleChangeOwnerOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _newOwner = source.readAddress();
  return {
    $$type: "ChangeOwnerOk" as const,
    queryId: _queryId,
    newOwner: _newOwner,
  };
}

function loadGetterTupleChangeOwnerOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _newOwner = source.readAddress();
  return {
    $$type: "ChangeOwnerOk" as const,
    queryId: _queryId,
    newOwner: _newOwner,
  };
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.newOwner);
  return builder.build();
}

function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
    },
    parse: (src) => {
      return loadChangeOwnerOk(src.loadRef().beginParse());
    },
  };
}

export type Deploy = {
  $$type: "Deploy";
  queryId: bigint;
};

export function storeDeploy(src: Deploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2490013878, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2490013878) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: "Deploy" as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "Deploy" as const, queryId: _queryId };
}

function loadGetterTupleDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "Deploy" as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadDeploy(src.loadRef().beginParse());
    },
  };
}

export type DeployOk = {
  $$type: "DeployOk";
  queryId: bigint;
};

export function storeDeployOk(src: DeployOk) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2952335191, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeployOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2952335191) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: "DeployOk" as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "DeployOk" as const, queryId: _queryId };
}

function loadGetterTupleDeployOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "DeployOk" as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
    },
    parse: (src) => {
      return loadDeployOk(src.loadRef().beginParse());
    },
  };
}

export type FactoryDeploy = {
  $$type: "FactoryDeploy";
  queryId: bigint;
  cashback: Address;
};

export function storeFactoryDeploy(src: FactoryDeploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1829761339, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.cashback);
  };
}

export function loadFactoryDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1829761339) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  let _cashback = sc_0.loadAddress();
  return {
    $$type: "FactoryDeploy" as const,
    queryId: _queryId,
    cashback: _cashback,
  };
}

function loadTupleFactoryDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _cashback = source.readAddress();
  return {
    $$type: "FactoryDeploy" as const,
    queryId: _queryId,
    cashback: _cashback,
  };
}

function loadGetterTupleFactoryDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _cashback = source.readAddress();
  return {
    $$type: "FactoryDeploy" as const,
    queryId: _queryId,
    cashback: _cashback,
  };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.cashback);
  return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadFactoryDeploy(src.loadRef().beginParse());
    },
  };
}

export type JettonData = {
  $$type: "JettonData";
  total_supply: bigint;
  mintable: boolean;
  owner: Address;
  jetton_content: Cell;
  jetton_wallet_code: Cell;
};

export function storeJettonData(src: JettonData) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeCoins(src.total_supply);
    b_0.storeBit(src.mintable);
    b_0.storeAddress(src.owner);
    b_0.storeRef(src.jetton_content);
    b_0.storeRef(src.jetton_wallet_code);
  };
}

export function loadJettonData(slice: Slice) {
  let sc_0 = slice;
  let _total_supply = sc_0.loadCoins();
  let _mintable = sc_0.loadBit();
  let _owner = sc_0.loadAddress();
  let _jetton_content = sc_0.loadRef();
  let _jetton_wallet_code = sc_0.loadRef();
  return {
    $$type: "JettonData" as const,
    total_supply: _total_supply,
    mintable: _mintable,
    owner: _owner,
    jetton_content: _jetton_content,
    jetton_wallet_code: _jetton_wallet_code,
  };
}

function loadTupleJettonData(source: TupleReader) {
  let _total_supply = source.readBigNumber();
  let _mintable = source.readBoolean();
  let _owner = source.readAddress();
  let _jetton_content = source.readCell();
  let _jetton_wallet_code = source.readCell();
  return {
    $$type: "JettonData" as const,
    total_supply: _total_supply,
    mintable: _mintable,
    owner: _owner,
    jetton_content: _jetton_content,
    jetton_wallet_code: _jetton_wallet_code,
  };
}

function loadGetterTupleJettonData(source: TupleReader) {
  let _total_supply = source.readBigNumber();
  let _mintable = source.readBoolean();
  let _owner = source.readAddress();
  let _jetton_content = source.readCell();
  let _jetton_wallet_code = source.readCell();
  return {
    $$type: "JettonData" as const,
    total_supply: _total_supply,
    mintable: _mintable,
    owner: _owner,
    jetton_content: _jetton_content,
    jetton_wallet_code: _jetton_wallet_code,
  };
}

function storeTupleJettonData(source: JettonData) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.total_supply);
  builder.writeBoolean(source.mintable);
  builder.writeAddress(source.owner);
  builder.writeCell(source.jetton_content);
  builder.writeCell(source.jetton_wallet_code);
  return builder.build();
}

function dictValueParserJettonData(): DictionaryValue<JettonData> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeJettonData(src)).endCell());
    },
    parse: (src) => {
      return loadJettonData(src.loadRef().beginParse());
    },
  };
}

export type StakingInfo = {
  $$type: "StakingInfo";
  amount: bigint;
  coefficient_last: bigint;
  last_update: bigint;
};

export function storeStakingInfo(src: StakingInfo) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeCoins(src.amount);
    b_0.storeInt(src.coefficient_last, 257);
    b_0.storeUint(src.last_update, 32);
  };
}

export function loadStakingInfo(slice: Slice) {
  let sc_0 = slice;
  let _amount = sc_0.loadCoins();
  let _coefficient_last = sc_0.loadIntBig(257);
  let _last_update = sc_0.loadUintBig(32);
  return {
    $$type: "StakingInfo" as const,
    amount: _amount,
    coefficient_last: _coefficient_last,
    last_update: _last_update,
  };
}

function loadTupleStakingInfo(source: TupleReader) {
  let _amount = source.readBigNumber();
  let _coefficient_last = source.readBigNumber();
  let _last_update = source.readBigNumber();
  return {
    $$type: "StakingInfo" as const,
    amount: _amount,
    coefficient_last: _coefficient_last,
    last_update: _last_update,
  };
}

function loadGetterTupleStakingInfo(source: TupleReader) {
  let _amount = source.readBigNumber();
  let _coefficient_last = source.readBigNumber();
  let _last_update = source.readBigNumber();
  return {
    $$type: "StakingInfo" as const,
    amount: _amount,
    coefficient_last: _coefficient_last,
    last_update: _last_update,
  };
}

function storeTupleStakingInfo(source: StakingInfo) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  builder.writeNumber(source.coefficient_last);
  builder.writeNumber(source.last_update);
  return builder.build();
}

function dictValueParserStakingInfo(): DictionaryValue<StakingInfo> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeStakingInfo(src)).endCell());
    },
    parse: (src) => {
      return loadStakingInfo(src.loadRef().beginParse());
    },
  };
}

export type MasterInfo = {
  $$type: "MasterInfo";
  coefficient: bigint;
  usdf_supply: bigint;
  pending_usdf_supply: bigint;
  usdf_addr: Address | null;
  MinTonForStorage: bigint;
};

export function storeMasterInfo(src: MasterInfo) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeInt(src.coefficient, 257);
    b_0.storeInt(src.usdf_supply, 257);
    b_0.storeInt(src.pending_usdf_supply, 257);
    let b_1 = new Builder();
    b_1.storeAddress(src.usdf_addr);
    b_1.storeInt(src.MinTonForStorage, 257);
    b_0.storeRef(b_1.endCell());
  };
}

export function loadMasterInfo(slice: Slice) {
  let sc_0 = slice;
  let _coefficient = sc_0.loadIntBig(257);
  let _usdf_supply = sc_0.loadIntBig(257);
  let _pending_usdf_supply = sc_0.loadIntBig(257);
  let sc_1 = sc_0.loadRef().beginParse();
  let _usdf_addr = sc_1.loadMaybeAddress();
  let _MinTonForStorage = sc_1.loadIntBig(257);
  return {
    $$type: "MasterInfo" as const,
    coefficient: _coefficient,
    usdf_supply: _usdf_supply,
    pending_usdf_supply: _pending_usdf_supply,
    usdf_addr: _usdf_addr,
    MinTonForStorage: _MinTonForStorage,
  };
}

function loadTupleMasterInfo(source: TupleReader) {
  let _coefficient = source.readBigNumber();
  let _usdf_supply = source.readBigNumber();
  let _pending_usdf_supply = source.readBigNumber();
  let _usdf_addr = source.readAddressOpt();
  let _MinTonForStorage = source.readBigNumber();
  return {
    $$type: "MasterInfo" as const,
    coefficient: _coefficient,
    usdf_supply: _usdf_supply,
    pending_usdf_supply: _pending_usdf_supply,
    usdf_addr: _usdf_addr,
    MinTonForStorage: _MinTonForStorage,
  };
}

function loadGetterTupleMasterInfo(source: TupleReader) {
  let _coefficient = source.readBigNumber();
  let _usdf_supply = source.readBigNumber();
  let _pending_usdf_supply = source.readBigNumber();
  let _usdf_addr = source.readAddressOpt();
  let _MinTonForStorage = source.readBigNumber();
  return {
    $$type: "MasterInfo" as const,
    coefficient: _coefficient,
    usdf_supply: _usdf_supply,
    pending_usdf_supply: _pending_usdf_supply,
    usdf_addr: _usdf_addr,
    MinTonForStorage: _MinTonForStorage,
  };
}

function storeTupleMasterInfo(source: MasterInfo) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.coefficient);
  builder.writeNumber(source.usdf_supply);
  builder.writeNumber(source.pending_usdf_supply);
  builder.writeAddress(source.usdf_addr);
  builder.writeNumber(source.MinTonForStorage);
  return builder.build();
}

function dictValueParserMasterInfo(): DictionaryValue<MasterInfo> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeMasterInfo(src)).endCell());
    },
    parse: (src) => {
      return loadMasterInfo(src.loadRef().beginParse());
    },
  };
}

export type SetJettonAddr = {
  $$type: "SetJettonAddr";
  usdf_wallet_addr: Address;
};

export function storeSetJettonAddr(src: SetJettonAddr) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2702157695, 32);
    b_0.storeAddress(src.usdf_wallet_addr);
  };
}

export function loadSetJettonAddr(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2702157695) {
    throw Error("Invalid prefix");
  }
  let _usdf_wallet_addr = sc_0.loadAddress();
  return {
    $$type: "SetJettonAddr" as const,
    usdf_wallet_addr: _usdf_wallet_addr,
  };
}

function loadTupleSetJettonAddr(source: TupleReader) {
  let _usdf_wallet_addr = source.readAddress();
  return {
    $$type: "SetJettonAddr" as const,
    usdf_wallet_addr: _usdf_wallet_addr,
  };
}

function loadGetterTupleSetJettonAddr(source: TupleReader) {
  let _usdf_wallet_addr = source.readAddress();
  return {
    $$type: "SetJettonAddr" as const,
    usdf_wallet_addr: _usdf_wallet_addr,
  };
}

function storeTupleSetJettonAddr(source: SetJettonAddr) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.usdf_wallet_addr);
  return builder.build();
}

function dictValueParserSetJettonAddr(): DictionaryValue<SetJettonAddr> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeSetJettonAddr(src)).endCell());
    },
    parse: (src) => {
      return loadSetJettonAddr(src.loadRef().beginParse());
    },
  };
}

export type SetCoefficient = {
  $$type: "SetCoefficient";
  coefficient: bigint;
};

export function storeSetCoefficient(src: SetCoefficient) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2500426611, 32);
    b_0.storeInt(src.coefficient, 257);
  };
}

export function loadSetCoefficient(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2500426611) {
    throw Error("Invalid prefix");
  }
  let _coefficient = sc_0.loadIntBig(257);
  return { $$type: "SetCoefficient" as const, coefficient: _coefficient };
}

function loadTupleSetCoefficient(source: TupleReader) {
  let _coefficient = source.readBigNumber();
  return { $$type: "SetCoefficient" as const, coefficient: _coefficient };
}

function loadGetterTupleSetCoefficient(source: TupleReader) {
  let _coefficient = source.readBigNumber();
  return { $$type: "SetCoefficient" as const, coefficient: _coefficient };
}

function storeTupleSetCoefficient(source: SetCoefficient) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.coefficient);
  return builder.build();
}

function dictValueParserSetCoefficient(): DictionaryValue<SetCoefficient> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeSetCoefficient(src)).endCell());
    },
    parse: (src) => {
      return loadSetCoefficient(src.loadRef().beginParse());
    },
  };
}

export type JettonWalletData = {
  $$type: "JettonWalletData";
  balance: bigint;
  owner: Address;
  master: Address;
  code: Cell;
};

export function storeJettonWalletData(src: JettonWalletData) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeInt(src.balance, 257);
    b_0.storeAddress(src.owner);
    b_0.storeAddress(src.master);
    b_0.storeRef(src.code);
  };
}

export function loadJettonWalletData(slice: Slice) {
  let sc_0 = slice;
  let _balance = sc_0.loadIntBig(257);
  let _owner = sc_0.loadAddress();
  let _master = sc_0.loadAddress();
  let _code = sc_0.loadRef();
  return {
    $$type: "JettonWalletData" as const,
    balance: _balance,
    owner: _owner,
    master: _master,
    code: _code,
  };
}

function loadTupleJettonWalletData(source: TupleReader) {
  let _balance = source.readBigNumber();
  let _owner = source.readAddress();
  let _master = source.readAddress();
  let _code = source.readCell();
  return {
    $$type: "JettonWalletData" as const,
    balance: _balance,
    owner: _owner,
    master: _master,
    code: _code,
  };
}

function loadGetterTupleJettonWalletData(source: TupleReader) {
  let _balance = source.readBigNumber();
  let _owner = source.readAddress();
  let _master = source.readAddress();
  let _code = source.readCell();
  return {
    $$type: "JettonWalletData" as const,
    balance: _balance,
    owner: _owner,
    master: _master,
    code: _code,
  };
}

function storeTupleJettonWalletData(source: JettonWalletData) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.balance);
  builder.writeAddress(source.owner);
  builder.writeAddress(source.master);
  builder.writeCell(source.code);
  return builder.build();
}

function dictValueParserJettonWalletData(): DictionaryValue<JettonWalletData> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeJettonWalletData(src)).endCell());
    },
    parse: (src) => {
      return loadJettonWalletData(src.loadRef().beginParse());
    },
  };
}

export type JettonTransfer = {
  $$type: "JettonTransfer";
  query_id: bigint;
  amount: bigint;
  destination: Address;
  response_destination: Address | null;
  custom_payload: Cell | null;
  forward_ton_amount: bigint;
  forward_payload: Slice;
};

export function storeJettonTransfer(src: JettonTransfer) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(260734629, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.destination);
    b_0.storeAddress(src.response_destination);
    if (src.custom_payload !== null && src.custom_payload !== undefined) {
      b_0.storeBit(true).storeRef(src.custom_payload);
    } else {
      b_0.storeBit(false);
    }
    b_0.storeCoins(src.forward_ton_amount);
    b_0.storeBuilder(src.forward_payload.asBuilder());
  };
}

export function loadJettonTransfer(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 260734629) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _amount = sc_0.loadCoins();
  let _destination = sc_0.loadAddress();
  let _response_destination = sc_0.loadMaybeAddress();
  let _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _forward_ton_amount = sc_0.loadCoins();
  let _forward_payload = sc_0;
  return {
    $$type: "JettonTransfer" as const,
    query_id: _query_id,
    amount: _amount,
    destination: _destination,
    response_destination: _response_destination,
    custom_payload: _custom_payload,
    forward_ton_amount: _forward_ton_amount,
    forward_payload: _forward_payload,
  };
}

function loadTupleJettonTransfer(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _amount = source.readBigNumber();
  let _destination = source.readAddress();
  let _response_destination = source.readAddressOpt();
  let _custom_payload = source.readCellOpt();
  let _forward_ton_amount = source.readBigNumber();
  let _forward_payload = source.readCell().asSlice();
  return {
    $$type: "JettonTransfer" as const,
    query_id: _query_id,
    amount: _amount,
    destination: _destination,
    response_destination: _response_destination,
    custom_payload: _custom_payload,
    forward_ton_amount: _forward_ton_amount,
    forward_payload: _forward_payload,
  };
}

function loadGetterTupleJettonTransfer(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _amount = source.readBigNumber();
  let _destination = source.readAddress();
  let _response_destination = source.readAddressOpt();
  let _custom_payload = source.readCellOpt();
  let _forward_ton_amount = source.readBigNumber();
  let _forward_payload = source.readCell().asSlice();
  return {
    $$type: "JettonTransfer" as const,
    query_id: _query_id,
    amount: _amount,
    destination: _destination,
    response_destination: _response_destination,
    custom_payload: _custom_payload,
    forward_ton_amount: _forward_ton_amount,
    forward_payload: _forward_payload,
  };
}

function storeTupleJettonTransfer(source: JettonTransfer) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  builder.writeNumber(source.amount);
  builder.writeAddress(source.destination);
  builder.writeAddress(source.response_destination);
  builder.writeCell(source.custom_payload);
  builder.writeNumber(source.forward_ton_amount);
  builder.writeSlice(source.forward_payload.asCell());
  return builder.build();
}

function dictValueParserJettonTransfer(): DictionaryValue<JettonTransfer> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeJettonTransfer(src)).endCell());
    },
    parse: (src) => {
      return loadJettonTransfer(src.loadRef().beginParse());
    },
  };
}

export type JettonInternalTransfer = {
  $$type: "JettonInternalTransfer";
  query_id: bigint;
  amount: bigint;
  from: Address;
  response_destination: Address | null;
  forward_ton_amount: bigint;
  forward_payload: Slice;
};

export function storeJettonInternalTransfer(src: JettonInternalTransfer) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(395134233, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.from);
    b_0.storeAddress(src.response_destination);
    b_0.storeCoins(src.forward_ton_amount);
    b_0.storeBuilder(src.forward_payload.asBuilder());
  };
}

export function loadJettonInternalTransfer(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 395134233) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _amount = sc_0.loadCoins();
  let _from = sc_0.loadAddress();
  let _response_destination = sc_0.loadMaybeAddress();
  let _forward_ton_amount = sc_0.loadCoins();
  let _forward_payload = sc_0;
  return {
    $$type: "JettonInternalTransfer" as const,
    query_id: _query_id,
    amount: _amount,
    from: _from,
    response_destination: _response_destination,
    forward_ton_amount: _forward_ton_amount,
    forward_payload: _forward_payload,
  };
}

function loadTupleJettonInternalTransfer(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _amount = source.readBigNumber();
  let _from = source.readAddress();
  let _response_destination = source.readAddressOpt();
  let _forward_ton_amount = source.readBigNumber();
  let _forward_payload = source.readCell().asSlice();
  return {
    $$type: "JettonInternalTransfer" as const,
    query_id: _query_id,
    amount: _amount,
    from: _from,
    response_destination: _response_destination,
    forward_ton_amount: _forward_ton_amount,
    forward_payload: _forward_payload,
  };
}

function loadGetterTupleJettonInternalTransfer(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _amount = source.readBigNumber();
  let _from = source.readAddress();
  let _response_destination = source.readAddressOpt();
  let _forward_ton_amount = source.readBigNumber();
  let _forward_payload = source.readCell().asSlice();
  return {
    $$type: "JettonInternalTransfer" as const,
    query_id: _query_id,
    amount: _amount,
    from: _from,
    response_destination: _response_destination,
    forward_ton_amount: _forward_ton_amount,
    forward_payload: _forward_payload,
  };
}

function storeTupleJettonInternalTransfer(source: JettonInternalTransfer) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  builder.writeNumber(source.amount);
  builder.writeAddress(source.from);
  builder.writeAddress(source.response_destination);
  builder.writeNumber(source.forward_ton_amount);
  builder.writeSlice(source.forward_payload.asCell());
  return builder.build();
}

function dictValueParserJettonInternalTransfer(): DictionaryValue<JettonInternalTransfer> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(
        beginCell().store(storeJettonInternalTransfer(src)).endCell()
      );
    },
    parse: (src) => {
      return loadJettonInternalTransfer(src.loadRef().beginParse());
    },
  };
}

export type JettonTransferNotification = {
  $$type: "JettonTransferNotification";
  query_id: bigint;
  amount: bigint;
  sender: Address;
  forward_payload: Slice;
};

export function storeJettonTransferNotification(
  src: JettonTransferNotification
) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1935855772, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.sender);
    b_0.storeBuilder(src.forward_payload.asBuilder());
  };
}

export function loadJettonTransferNotification(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1935855772) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _amount = sc_0.loadCoins();
  let _sender = sc_0.loadAddress();
  let _forward_payload = sc_0;
  return {
    $$type: "JettonTransferNotification" as const,
    query_id: _query_id,
    amount: _amount,
    sender: _sender,
    forward_payload: _forward_payload,
  };
}

function loadTupleJettonTransferNotification(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _amount = source.readBigNumber();
  let _sender = source.readAddress();
  let _forward_payload = source.readCell().asSlice();
  return {
    $$type: "JettonTransferNotification" as const,
    query_id: _query_id,
    amount: _amount,
    sender: _sender,
    forward_payload: _forward_payload,
  };
}

function loadGetterTupleJettonTransferNotification(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _amount = source.readBigNumber();
  let _sender = source.readAddress();
  let _forward_payload = source.readCell().asSlice();
  return {
    $$type: "JettonTransferNotification" as const,
    query_id: _query_id,
    amount: _amount,
    sender: _sender,
    forward_payload: _forward_payload,
  };
}

function storeTupleJettonTransferNotification(
  source: JettonTransferNotification
) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  builder.writeNumber(source.amount);
  builder.writeAddress(source.sender);
  builder.writeSlice(source.forward_payload.asCell());
  return builder.build();
}

function dictValueParserJettonTransferNotification(): DictionaryValue<JettonTransferNotification> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(
        beginCell().store(storeJettonTransferNotification(src)).endCell()
      );
    },
    parse: (src) => {
      return loadJettonTransferNotification(src.loadRef().beginParse());
    },
  };
}

export type JettonBurn = {
  $$type: "JettonBurn";
  query_id: bigint;
  amount: bigint;
  response_destination: Address | null;
  custom_payload: Cell | null;
};

export function storeJettonBurn(src: JettonBurn) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1499400124, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.response_destination);
    if (src.custom_payload !== null && src.custom_payload !== undefined) {
      b_0.storeBit(true).storeRef(src.custom_payload);
    } else {
      b_0.storeBit(false);
    }
  };
}

export function loadJettonBurn(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1499400124) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _amount = sc_0.loadCoins();
  let _response_destination = sc_0.loadMaybeAddress();
  let _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
  return {
    $$type: "JettonBurn" as const,
    query_id: _query_id,
    amount: _amount,
    response_destination: _response_destination,
    custom_payload: _custom_payload,
  };
}

function loadTupleJettonBurn(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _amount = source.readBigNumber();
  let _response_destination = source.readAddressOpt();
  let _custom_payload = source.readCellOpt();
  return {
    $$type: "JettonBurn" as const,
    query_id: _query_id,
    amount: _amount,
    response_destination: _response_destination,
    custom_payload: _custom_payload,
  };
}

function loadGetterTupleJettonBurn(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _amount = source.readBigNumber();
  let _response_destination = source.readAddressOpt();
  let _custom_payload = source.readCellOpt();
  return {
    $$type: "JettonBurn" as const,
    query_id: _query_id,
    amount: _amount,
    response_destination: _response_destination,
    custom_payload: _custom_payload,
  };
}

function storeTupleJettonBurn(source: JettonBurn) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  builder.writeNumber(source.amount);
  builder.writeAddress(source.response_destination);
  builder.writeCell(source.custom_payload);
  return builder.build();
}

function dictValueParserJettonBurn(): DictionaryValue<JettonBurn> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeJettonBurn(src)).endCell());
    },
    parse: (src) => {
      return loadJettonBurn(src.loadRef().beginParse());
    },
  };
}

export type JettonExcesses = {
  $$type: "JettonExcesses";
  query_id: bigint;
};

export function storeJettonExcesses(src: JettonExcesses) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3576854235, 32);
    b_0.storeUint(src.query_id, 64);
  };
}

export function loadJettonExcesses(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3576854235) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  return { $$type: "JettonExcesses" as const, query_id: _query_id };
}

function loadTupleJettonExcesses(source: TupleReader) {
  let _query_id = source.readBigNumber();
  return { $$type: "JettonExcesses" as const, query_id: _query_id };
}

function loadGetterTupleJettonExcesses(source: TupleReader) {
  let _query_id = source.readBigNumber();
  return { $$type: "JettonExcesses" as const, query_id: _query_id };
}

function storeTupleJettonExcesses(source: JettonExcesses) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  return builder.build();
}

function dictValueParserJettonExcesses(): DictionaryValue<JettonExcesses> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeJettonExcesses(src)).endCell());
    },
    parse: (src) => {
      return loadJettonExcesses(src.loadRef().beginParse());
    },
  };
}

export type TokenUpdateContent = {
  $$type: "TokenUpdateContent";
  content: Cell;
};

export function storeTokenUpdateContent(src: TokenUpdateContent) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2937889386, 32);
    b_0.storeRef(src.content);
  };
}

export function loadTokenUpdateContent(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2937889386) {
    throw Error("Invalid prefix");
  }
  let _content = sc_0.loadRef();
  return { $$type: "TokenUpdateContent" as const, content: _content };
}

function loadTupleTokenUpdateContent(source: TupleReader) {
  let _content = source.readCell();
  return { $$type: "TokenUpdateContent" as const, content: _content };
}

function loadGetterTupleTokenUpdateContent(source: TupleReader) {
  let _content = source.readCell();
  return { $$type: "TokenUpdateContent" as const, content: _content };
}

function storeTupleTokenUpdateContent(source: TokenUpdateContent) {
  let builder = new TupleBuilder();
  builder.writeCell(source.content);
  return builder.build();
}

function dictValueParserTokenUpdateContent(): DictionaryValue<TokenUpdateContent> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(
        beginCell().store(storeTokenUpdateContent(src)).endCell()
      );
    },
    parse: (src) => {
      return loadTokenUpdateContent(src.loadRef().beginParse());
    },
  };
}

export type ProvideWalletAddress = {
  $$type: "ProvideWalletAddress";
  query_id: bigint;
  owner_address: Address;
  include_address: boolean;
};

export function storeProvideWalletAddress(src: ProvideWalletAddress) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(745978227, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeAddress(src.owner_address);
    b_0.storeBit(src.include_address);
  };
}

export function loadProvideWalletAddress(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 745978227) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _owner_address = sc_0.loadAddress();
  let _include_address = sc_0.loadBit();
  return {
    $$type: "ProvideWalletAddress" as const,
    query_id: _query_id,
    owner_address: _owner_address,
    include_address: _include_address,
  };
}

function loadTupleProvideWalletAddress(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _owner_address = source.readAddress();
  let _include_address = source.readBoolean();
  return {
    $$type: "ProvideWalletAddress" as const,
    query_id: _query_id,
    owner_address: _owner_address,
    include_address: _include_address,
  };
}

function loadGetterTupleProvideWalletAddress(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _owner_address = source.readAddress();
  let _include_address = source.readBoolean();
  return {
    $$type: "ProvideWalletAddress" as const,
    query_id: _query_id,
    owner_address: _owner_address,
    include_address: _include_address,
  };
}

function storeTupleProvideWalletAddress(source: ProvideWalletAddress) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  builder.writeAddress(source.owner_address);
  builder.writeBoolean(source.include_address);
  return builder.build();
}

function dictValueParserProvideWalletAddress(): DictionaryValue<ProvideWalletAddress> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(
        beginCell().store(storeProvideWalletAddress(src)).endCell()
      );
    },
    parse: (src) => {
      return loadProvideWalletAddress(src.loadRef().beginParse());
    },
  };
}

export type TakeWalletAddress = {
  $$type: "TakeWalletAddress";
  query_id: bigint;
  wallet_address: Address;
  owner_address: Slice;
};

export function storeTakeWalletAddress(src: TakeWalletAddress) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3513996288, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeAddress(src.wallet_address);
    b_0.storeBuilder(src.owner_address.asBuilder());
  };
}

export function loadTakeWalletAddress(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3513996288) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _wallet_address = sc_0.loadAddress();
  let _owner_address = sc_0;
  return {
    $$type: "TakeWalletAddress" as const,
    query_id: _query_id,
    wallet_address: _wallet_address,
    owner_address: _owner_address,
  };
}

function loadTupleTakeWalletAddress(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _wallet_address = source.readAddress();
  let _owner_address = source.readCell().asSlice();
  return {
    $$type: "TakeWalletAddress" as const,
    query_id: _query_id,
    wallet_address: _wallet_address,
    owner_address: _owner_address,
  };
}

function loadGetterTupleTakeWalletAddress(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _wallet_address = source.readAddress();
  let _owner_address = source.readCell().asSlice();
  return {
    $$type: "TakeWalletAddress" as const,
    query_id: _query_id,
    wallet_address: _wallet_address,
    owner_address: _owner_address,
  };
}

function storeTupleTakeWalletAddress(source: TakeWalletAddress) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  builder.writeAddress(source.wallet_address);
  builder.writeSlice(source.owner_address.asCell());
  return builder.build();
}

function dictValueParserTakeWalletAddress(): DictionaryValue<TakeWalletAddress> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(
        beginCell().store(storeTakeWalletAddress(src)).endCell()
      );
    },
    parse: (src) => {
      return loadTakeWalletAddress(src.loadRef().beginParse());
    },
  };
}

export type JettonBurnNotification = {
  $$type: "JettonBurnNotification";
  query_id: bigint;
  amount: bigint;
  sender: Address;
  response_destination: Address | null;
};

export function storeJettonBurnNotification(src: JettonBurnNotification) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2078119902, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.sender);
    b_0.storeAddress(src.response_destination);
  };
}

export function loadJettonBurnNotification(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2078119902) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _amount = sc_0.loadCoins();
  let _sender = sc_0.loadAddress();
  let _response_destination = sc_0.loadMaybeAddress();
  return {
    $$type: "JettonBurnNotification" as const,
    query_id: _query_id,
    amount: _amount,
    sender: _sender,
    response_destination: _response_destination,
  };
}

function loadTupleJettonBurnNotification(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _amount = source.readBigNumber();
  let _sender = source.readAddress();
  let _response_destination = source.readAddressOpt();
  return {
    $$type: "JettonBurnNotification" as const,
    query_id: _query_id,
    amount: _amount,
    sender: _sender,
    response_destination: _response_destination,
  };
}

function loadGetterTupleJettonBurnNotification(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _amount = source.readBigNumber();
  let _sender = source.readAddress();
  let _response_destination = source.readAddressOpt();
  return {
    $$type: "JettonBurnNotification" as const,
    query_id: _query_id,
    amount: _amount,
    sender: _sender,
    response_destination: _response_destination,
  };
}

function storeTupleJettonBurnNotification(source: JettonBurnNotification) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  builder.writeNumber(source.amount);
  builder.writeAddress(source.sender);
  builder.writeAddress(source.response_destination);
  return builder.build();
}

function dictValueParserJettonBurnNotification(): DictionaryValue<JettonBurnNotification> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(
        beginCell().store(storeJettonBurnNotification(src)).endCell()
      );
    },
    parse: (src) => {
      return loadJettonBurnNotification(src.loadRef().beginParse());
    },
  };
}

export type WithdrawTon = {
  $$type: "WithdrawTon";
  amount: bigint;
};

export function storeWithdrawTon(src: WithdrawTon) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(4206811366, 32);
    b_0.storeCoins(src.amount);
  };
}

export function loadWithdrawTon(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 4206811366) {
    throw Error("Invalid prefix");
  }
  let _amount = sc_0.loadCoins();
  return { $$type: "WithdrawTon" as const, amount: _amount };
}

function loadTupleWithdrawTon(source: TupleReader) {
  let _amount = source.readBigNumber();
  return { $$type: "WithdrawTon" as const, amount: _amount };
}

function loadGetterTupleWithdrawTon(source: TupleReader) {
  let _amount = source.readBigNumber();
  return { $$type: "WithdrawTon" as const, amount: _amount };
}

function storeTupleWithdrawTon(source: WithdrawTon) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  return builder.build();
}

function dictValueParserWithdrawTon(): DictionaryValue<WithdrawTon> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeWithdrawTon(src)).endCell());
    },
    parse: (src) => {
      return loadWithdrawTon(src.loadRef().beginParse());
    },
  };
}

export type WithdrawJetton = {
  $$type: "WithdrawJetton";
  amount: bigint;
  jetton_addr: Address;
};

export function storeWithdrawJetton(src: WithdrawJetton) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1831536743, 32);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.jetton_addr);
  };
}

export function loadWithdrawJetton(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1831536743) {
    throw Error("Invalid prefix");
  }
  let _amount = sc_0.loadCoins();
  let _jetton_addr = sc_0.loadAddress();
  return {
    $$type: "WithdrawJetton" as const,
    amount: _amount,
    jetton_addr: _jetton_addr,
  };
}

function loadTupleWithdrawJetton(source: TupleReader) {
  let _amount = source.readBigNumber();
  let _jetton_addr = source.readAddress();
  return {
    $$type: "WithdrawJetton" as const,
    amount: _amount,
    jetton_addr: _jetton_addr,
  };
}

function loadGetterTupleWithdrawJetton(source: TupleReader) {
  let _amount = source.readBigNumber();
  let _jetton_addr = source.readAddress();
  return {
    $$type: "WithdrawJetton" as const,
    amount: _amount,
    jetton_addr: _jetton_addr,
  };
}

function storeTupleWithdrawJetton(source: WithdrawJetton) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  builder.writeAddress(source.jetton_addr);
  return builder.build();
}

function dictValueParserWithdrawJetton(): DictionaryValue<WithdrawJetton> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeWithdrawJetton(src)).endCell());
    },
    parse: (src) => {
      return loadWithdrawJetton(src.loadRef().beginParse());
    },
  };
}

export type Pending2Withdraw = {
  $$type: "Pending2Withdraw";
  amount: bigint;
  destination: Address;
};

export function storePending2Withdraw(src: Pending2Withdraw) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(419478360, 32);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.destination);
  };
}

export function loadPending2Withdraw(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 419478360) {
    throw Error("Invalid prefix");
  }
  let _amount = sc_0.loadCoins();
  let _destination = sc_0.loadAddress();
  return {
    $$type: "Pending2Withdraw" as const,
    amount: _amount,
    destination: _destination,
  };
}

function loadTuplePending2Withdraw(source: TupleReader) {
  let _amount = source.readBigNumber();
  let _destination = source.readAddress();
  return {
    $$type: "Pending2Withdraw" as const,
    amount: _amount,
    destination: _destination,
  };
}

function loadGetterTuplePending2Withdraw(source: TupleReader) {
  let _amount = source.readBigNumber();
  let _destination = source.readAddress();
  return {
    $$type: "Pending2Withdraw" as const,
    amount: _amount,
    destination: _destination,
  };
}

function storeTuplePending2Withdraw(source: Pending2Withdraw) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  builder.writeAddress(source.destination);
  return builder.build();
}

function dictValueParserPending2Withdraw(): DictionaryValue<Pending2Withdraw> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storePending2Withdraw(src)).endCell());
    },
    parse: (src) => {
      return loadPending2Withdraw(src.loadRef().beginParse());
    },
  };
}

export type JettonWallet$Data = {
  $$type: "JettonWallet$Data";
  balance: bigint;
  owner: Address;
  master: Address;
};

export function storeJettonWallet$Data(src: JettonWallet$Data) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeInt(src.balance, 257);
    b_0.storeAddress(src.owner);
    b_0.storeAddress(src.master);
  };
}

export function loadJettonWallet$Data(slice: Slice) {
  let sc_0 = slice;
  let _balance = sc_0.loadIntBig(257);
  let _owner = sc_0.loadAddress();
  let _master = sc_0.loadAddress();
  return {
    $$type: "JettonWallet$Data" as const,
    balance: _balance,
    owner: _owner,
    master: _master,
  };
}

function loadTupleJettonWallet$Data(source: TupleReader) {
  let _balance = source.readBigNumber();
  let _owner = source.readAddress();
  let _master = source.readAddress();
  return {
    $$type: "JettonWallet$Data" as const,
    balance: _balance,
    owner: _owner,
    master: _master,
  };
}

function loadGetterTupleJettonWallet$Data(source: TupleReader) {
  let _balance = source.readBigNumber();
  let _owner = source.readAddress();
  let _master = source.readAddress();
  return {
    $$type: "JettonWallet$Data" as const,
    balance: _balance,
    owner: _owner,
    master: _master,
  };
}

function storeTupleJettonWallet$Data(source: JettonWallet$Data) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.balance);
  builder.writeAddress(source.owner);
  builder.writeAddress(source.master);
  return builder.build();
}

function dictValueParserJettonWallet$Data(): DictionaryValue<JettonWallet$Data> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(
        beginCell().store(storeJettonWallet$Data(src)).endCell()
      );
    },
    parse: (src) => {
      return loadJettonWallet$Data(src.loadRef().beginParse());
    },
  };
}

export type SUSDFJettonMaster$Data = {
  $$type: "SUSDFJettonMaster$Data";
  total_supply: bigint;
  owner: Address;
  mintable: boolean;
  jetton_content: Cell;
  staking_infos: Dictionary<Address, StakingInfo>;
  coefficient: bigint;
  usdf_supply: bigint;
  usdf_addr: Address | null;
  pending_withdraw_balance: Dictionary<Address, bigint>;
  pending_usdf_supply: bigint;
};

export function storeSUSDFJettonMaster$Data(src: SUSDFJettonMaster$Data) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeCoins(src.total_supply);
    b_0.storeAddress(src.owner);
    b_0.storeBit(src.mintable);
    b_0.storeRef(src.jetton_content);
    b_0.storeDict(
      src.staking_infos,
      Dictionary.Keys.Address(),
      dictValueParserStakingInfo()
    );
    b_0.storeInt(src.coefficient, 257);
    b_0.storeCoins(src.usdf_supply);
    let b_1 = new Builder();
    b_1.storeAddress(src.usdf_addr);
    b_1.storeDict(
      src.pending_withdraw_balance,
      Dictionary.Keys.Address(),
      Dictionary.Values.BigInt(257)
    );
    b_1.storeCoins(src.pending_usdf_supply);
    b_0.storeRef(b_1.endCell());
  };
}

export function loadSUSDFJettonMaster$Data(slice: Slice) {
  let sc_0 = slice;
  let _total_supply = sc_0.loadCoins();
  let _owner = sc_0.loadAddress();
  let _mintable = sc_0.loadBit();
  let _jetton_content = sc_0.loadRef();
  let _staking_infos = Dictionary.load(
    Dictionary.Keys.Address(),
    dictValueParserStakingInfo(),
    sc_0
  );
  let _coefficient = sc_0.loadIntBig(257);
  let _usdf_supply = sc_0.loadCoins();
  let sc_1 = sc_0.loadRef().beginParse();
  let _usdf_addr = sc_1.loadMaybeAddress();
  let _pending_withdraw_balance = Dictionary.load(
    Dictionary.Keys.Address(),
    Dictionary.Values.BigInt(257),
    sc_1
  );
  let _pending_usdf_supply = sc_1.loadCoins();
  return {
    $$type: "SUSDFJettonMaster$Data" as const,
    total_supply: _total_supply,
    owner: _owner,
    mintable: _mintable,
    jetton_content: _jetton_content,
    staking_infos: _staking_infos,
    coefficient: _coefficient,
    usdf_supply: _usdf_supply,
    usdf_addr: _usdf_addr,
    pending_withdraw_balance: _pending_withdraw_balance,
    pending_usdf_supply: _pending_usdf_supply,
  };
}

function loadTupleSUSDFJettonMaster$Data(source: TupleReader) {
  let _total_supply = source.readBigNumber();
  let _owner = source.readAddress();
  let _mintable = source.readBoolean();
  let _jetton_content = source.readCell();
  let _staking_infos = Dictionary.loadDirect(
    Dictionary.Keys.Address(),
    dictValueParserStakingInfo(),
    source.readCellOpt()
  );
  let _coefficient = source.readBigNumber();
  let _usdf_supply = source.readBigNumber();
  let _usdf_addr = source.readAddressOpt();
  let _pending_withdraw_balance = Dictionary.loadDirect(
    Dictionary.Keys.Address(),
    Dictionary.Values.BigInt(257),
    source.readCellOpt()
  );
  let _pending_usdf_supply = source.readBigNumber();
  return {
    $$type: "SUSDFJettonMaster$Data" as const,
    total_supply: _total_supply,
    owner: _owner,
    mintable: _mintable,
    jetton_content: _jetton_content,
    staking_infos: _staking_infos,
    coefficient: _coefficient,
    usdf_supply: _usdf_supply,
    usdf_addr: _usdf_addr,
    pending_withdraw_balance: _pending_withdraw_balance,
    pending_usdf_supply: _pending_usdf_supply,
  };
}

function loadGetterTupleSUSDFJettonMaster$Data(source: TupleReader) {
  let _total_supply = source.readBigNumber();
  let _owner = source.readAddress();
  let _mintable = source.readBoolean();
  let _jetton_content = source.readCell();
  let _staking_infos = Dictionary.loadDirect(
    Dictionary.Keys.Address(),
    dictValueParserStakingInfo(),
    source.readCellOpt()
  );
  let _coefficient = source.readBigNumber();
  let _usdf_supply = source.readBigNumber();
  let _usdf_addr = source.readAddressOpt();
  let _pending_withdraw_balance = Dictionary.loadDirect(
    Dictionary.Keys.Address(),
    Dictionary.Values.BigInt(257),
    source.readCellOpt()
  );
  let _pending_usdf_supply = source.readBigNumber();
  return {
    $$type: "SUSDFJettonMaster$Data" as const,
    total_supply: _total_supply,
    owner: _owner,
    mintable: _mintable,
    jetton_content: _jetton_content,
    staking_infos: _staking_infos,
    coefficient: _coefficient,
    usdf_supply: _usdf_supply,
    usdf_addr: _usdf_addr,
    pending_withdraw_balance: _pending_withdraw_balance,
    pending_usdf_supply: _pending_usdf_supply,
  };
}

function storeTupleSUSDFJettonMaster$Data(source: SUSDFJettonMaster$Data) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.total_supply);
  builder.writeAddress(source.owner);
  builder.writeBoolean(source.mintable);
  builder.writeCell(source.jetton_content);
  builder.writeCell(
    source.staking_infos.size > 0
      ? beginCell()
          .storeDictDirect(
            source.staking_infos,
            Dictionary.Keys.Address(),
            dictValueParserStakingInfo()
          )
          .endCell()
      : null
  );
  builder.writeNumber(source.coefficient);
  builder.writeNumber(source.usdf_supply);
  builder.writeAddress(source.usdf_addr);
  builder.writeCell(
    source.pending_withdraw_balance.size > 0
      ? beginCell()
          .storeDictDirect(
            source.pending_withdraw_balance,
            Dictionary.Keys.Address(),
            Dictionary.Values.BigInt(257)
          )
          .endCell()
      : null
  );
  builder.writeNumber(source.pending_usdf_supply);
  return builder.build();
}

function dictValueParserSUSDFJettonMaster$Data(): DictionaryValue<SUSDFJettonMaster$Data> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(
        beginCell().store(storeSUSDFJettonMaster$Data(src)).endCell()
      );
    },
    parse: (src) => {
      return loadSUSDFJettonMaster$Data(src.loadRef().beginParse());
    },
  };
}

type SUSDFJettonMaster_init_args = {
  $$type: "SUSDFJettonMaster_init_args";
  owner: Address;
  jetton_content: Cell;
};

function initSUSDFJettonMaster_init_args(src: SUSDFJettonMaster_init_args) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeAddress(src.owner);
    b_0.storeRef(src.jetton_content);
  };
}

async function SUSDFJettonMaster_init(owner: Address, jetton_content: Cell) {
  const __code = Cell.fromBase64(
    "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"
  );
  const __system = Cell.fromBase64(
    "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"
  );
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initSUSDFJettonMaster_init_args({
    $$type: "SUSDFJettonMaster_init_args",
    owner,
    jetton_content,
  })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const SUSDFJettonMaster_errors: { [key: number]: { message: string } } = {
  2: { message: `Stack underflow` },
  3: { message: `Stack overflow` },
  4: { message: `Integer overflow` },
  5: { message: `Integer out of expected range` },
  6: { message: `Invalid opcode` },
  7: { message: `Type check error` },
  8: { message: `Cell overflow` },
  9: { message: `Cell underflow` },
  10: { message: `Dictionary error` },
  13: { message: `Out of gas error` },
  32: { message: `Method ID not found` },
  34: { message: `Action is invalid or not supported` },
  37: { message: `Not enough TON` },
  38: { message: `Not enough extra-currencies` },
  128: { message: `Null reference exception` },
  129: { message: `Invalid serialization prefix` },
  130: { message: `Invalid incoming message` },
  131: { message: `Constraints error` },
  132: { message: `Access denied` },
  133: { message: `Contract stopped` },
  134: { message: `Invalid argument` },
  135: { message: `Code of a contract was not found` },
  136: { message: `Invalid address` },
  137: { message: `Masterchain support is not enabled for this contract` },
  3171: { message: `JettonInternalTransfer: Invalid balance` },
  7192: { message: `JettonTransferNotification: not enough value` },
  8358: { message: `JettonBurn: Invalid balance` },
  9003: { message: `JettonTransfer: Not enough jettons to transfer` },
  9340: { message: `WithdrawJetton: Not owner` },
  11252: { message: `wallect WithdrawJetton: Not owner` },
  12896: { message: `Pending2Withdraw: usdt_supply is not enough` },
  14472: { message: `JettonTransfer: Invalid value` },
  15509: { message: `Only deployer is allowed to withdraw` },
  16745: { message: `Pending2Withdraw: current_pending_balance is not enough` },
  16845: { message: `JettonBurnNotification: Invalid sender` },
  17593: { message: `SetJettonAddr: Invalid sender` },
  23951: { message: `Insufficient gas` },
  24068: { message: `wallect Only owner is allowed to withdraw` },
  26133: { message: `JettonTransfer: Invalid sender` },
  33362: { message: `JettonInternalTransfer: Invalid sender!` },
  36999: { message: `Pending2unstaking: Not owner` },
  44255: { message: `JettonBurn: Invalid sender` },
  53972: { message: `SetCoefficient: Invalid sender` },
  54615: { message: `Insufficient balance` },
  55684: { message: `JettonBurn: Invalid value - Burn` },
};

const SUSDFJettonMaster_types: ABIType[] = [
  {
    name: "StateInit",
    header: null,
    fields: [
      { name: "code", type: { kind: "simple", type: "cell", optional: false } },
      { name: "data", type: { kind: "simple", type: "cell", optional: false } },
    ],
  },
  {
    name: "Context",
    header: null,
    fields: [
      {
        name: "bounced",
        type: { kind: "simple", type: "bool", optional: false },
      },
      {
        name: "sender",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "value",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      { name: "raw", type: { kind: "simple", type: "slice", optional: false } },
    ],
  },
  {
    name: "SendParameters",
    header: null,
    fields: [
      {
        name: "bounce",
        type: { kind: "simple", type: "bool", optional: false },
      },
      {
        name: "to",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "value",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      {
        name: "mode",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      { name: "body", type: { kind: "simple", type: "cell", optional: true } },
      { name: "code", type: { kind: "simple", type: "cell", optional: true } },
      { name: "data", type: { kind: "simple", type: "cell", optional: true } },
    ],
  },
  {
    name: "ChangeOwner",
    header: 2174598809,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "newOwner",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
  },
  {
    name: "ChangeOwnerOk",
    header: 846932810,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "newOwner",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
  },
  {
    name: "Deploy",
    header: 2490013878,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
    ],
  },
  {
    name: "DeployOk",
    header: 2952335191,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
    ],
  },
  {
    name: "FactoryDeploy",
    header: 1829761339,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "cashback",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
  },
  {
    name: "JettonData",
    header: null,
    fields: [
      {
        name: "total_supply",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "mintable",
        type: { kind: "simple", type: "bool", optional: false },
      },
      {
        name: "owner",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "jetton_content",
        type: { kind: "simple", type: "cell", optional: false },
      },
      {
        name: "jetton_wallet_code",
        type: { kind: "simple", type: "cell", optional: false },
      },
    ],
  },
  {
    name: "StakingInfo",
    header: null,
    fields: [
      {
        name: "amount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "coefficient_last",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      {
        name: "last_update",
        type: { kind: "simple", type: "uint", optional: false, format: 32 },
      },
    ],
  },
  {
    name: "MasterInfo",
    header: null,
    fields: [
      {
        name: "coefficient",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      {
        name: "usdf_supply",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      {
        name: "pending_usdf_supply",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      {
        name: "usdf_addr",
        type: { kind: "simple", type: "address", optional: true },
      },
      {
        name: "MinTonForStorage",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
    ],
  },
  {
    name: "SetJettonAddr",
    header: 2702157695,
    fields: [
      {
        name: "usdf_wallet_addr",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
  },
  {
    name: "SetCoefficient",
    header: 2500426611,
    fields: [
      {
        name: "coefficient",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
    ],
  },
  {
    name: "JettonWalletData",
    header: null,
    fields: [
      {
        name: "balance",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      {
        name: "owner",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "master",
        type: { kind: "simple", type: "address", optional: false },
      },
      { name: "code", type: { kind: "simple", type: "cell", optional: false } },
    ],
  },
  {
    name: "JettonTransfer",
    header: 260734629,
    fields: [
      {
        name: "query_id",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "amount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "destination",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "response_destination",
        type: { kind: "simple", type: "address", optional: true },
      },
      {
        name: "custom_payload",
        type: { kind: "simple", type: "cell", optional: true },
      },
      {
        name: "forward_ton_amount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "forward_payload",
        type: {
          kind: "simple",
          type: "slice",
          optional: false,
          format: "remainder",
        },
      },
    ],
  },
  {
    name: "JettonInternalTransfer",
    header: 395134233,
    fields: [
      {
        name: "query_id",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "amount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "from",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "response_destination",
        type: { kind: "simple", type: "address", optional: true },
      },
      {
        name: "forward_ton_amount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "forward_payload",
        type: {
          kind: "simple",
          type: "slice",
          optional: false,
          format: "remainder",
        },
      },
    ],
  },
  {
    name: "JettonTransferNotification",
    header: 1935855772,
    fields: [
      {
        name: "query_id",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "amount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "sender",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "forward_payload",
        type: {
          kind: "simple",
          type: "slice",
          optional: false,
          format: "remainder",
        },
      },
    ],
  },
  {
    name: "JettonBurn",
    header: 1499400124,
    fields: [
      {
        name: "query_id",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "amount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "response_destination",
        type: { kind: "simple", type: "address", optional: true },
      },
      {
        name: "custom_payload",
        type: { kind: "simple", type: "cell", optional: true },
      },
    ],
  },
  {
    name: "JettonExcesses",
    header: 3576854235,
    fields: [
      {
        name: "query_id",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
    ],
  },
  {
    name: "TokenUpdateContent",
    header: 2937889386,
    fields: [
      {
        name: "content",
        type: { kind: "simple", type: "cell", optional: false },
      },
    ],
  },
  {
    name: "ProvideWalletAddress",
    header: 745978227,
    fields: [
      {
        name: "query_id",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "owner_address",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "include_address",
        type: { kind: "simple", type: "bool", optional: false },
      },
    ],
  },
  {
    name: "TakeWalletAddress",
    header: 3513996288,
    fields: [
      {
        name: "query_id",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "wallet_address",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "owner_address",
        type: {
          kind: "simple",
          type: "slice",
          optional: false,
          format: "remainder",
        },
      },
    ],
  },
  {
    name: "JettonBurnNotification",
    header: 2078119902,
    fields: [
      {
        name: "query_id",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "amount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "sender",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "response_destination",
        type: { kind: "simple", type: "address", optional: true },
      },
    ],
  },
  {
    name: "WithdrawTon",
    header: 4206811366,
    fields: [
      {
        name: "amount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
    ],
  },
  {
    name: "WithdrawJetton",
    header: 1831536743,
    fields: [
      {
        name: "amount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "jetton_addr",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
  },
  {
    name: "Pending2Withdraw",
    header: 419478360,
    fields: [
      {
        name: "amount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "destination",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
  },
  {
    name: "JettonWallet$Data",
    header: null,
    fields: [
      {
        name: "balance",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      {
        name: "owner",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "master",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
  },
  {
    name: "SUSDFJettonMaster$Data",
    header: null,
    fields: [
      {
        name: "total_supply",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "owner",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "mintable",
        type: { kind: "simple", type: "bool", optional: false },
      },
      {
        name: "jetton_content",
        type: { kind: "simple", type: "cell", optional: false },
      },
      {
        name: "staking_infos",
        type: {
          kind: "dict",
          key: "address",
          value: "StakingInfo",
          valueFormat: "ref",
        },
      },
      {
        name: "coefficient",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      {
        name: "usdf_supply",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "usdf_addr",
        type: { kind: "simple", type: "address", optional: true },
      },
      {
        name: "pending_withdraw_balance",
        type: { kind: "dict", key: "address", value: "int" },
      },
      {
        name: "pending_usdf_supply",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
    ],
  },
];

const SUSDFJettonMaster_getters: ABIGetter[] = [
  {
    name: "get_master_data",
    arguments: [],
    returnType: { kind: "simple", type: "MasterInfo", optional: false },
  },
  {
    name: "get_addr_staking_info",
    arguments: [],
    returnType: {
      kind: "dict",
      key: "address",
      value: "StakingInfo",
      valueFormat: "ref",
    },
  },
  {
    name: "balance",
    arguments: [],
    returnType: { kind: "simple", type: "string", optional: false },
  },
  {
    name: "wallet_jetton_balance",
    arguments: [
      {
        name: "addr",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
    returnType: { kind: "simple", type: "StakingInfo", optional: false },
  },
  {
    name: "get_jetton_data",
    arguments: [],
    returnType: { kind: "simple", type: "JettonData", optional: false },
  },
  {
    name: "get_wallet_address",
    arguments: [
      {
        name: "owner_address",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
    returnType: { kind: "simple", type: "address", optional: false },
  },
  {
    name: "get_addr_pending_usdf_amount",
    arguments: [],
    returnType: { kind: "dict", key: "address", value: "int" },
  },
  {
    name: "owner",
    arguments: [],
    returnType: { kind: "simple", type: "address", optional: false },
  },
];

export const SUSDFJettonMaster_getterMapping: { [key: string]: string } = {
  get_master_data: "getGetMasterData",
  get_addr_staking_info: "getGetAddrStakingInfo",
  balance: "getBalance",
  wallet_jetton_balance: "getWalletJettonBalance",
  get_jetton_data: "getGetJettonData",
  get_wallet_address: "getGetWalletAddress",
  get_addr_pending_usdf_amount: "getGetAddrPendingUsdfAmount",
  owner: "getOwner",
};

const SUSDFJettonMaster_receivers: ABIReceiver[] = [
  {
    receiver: "internal",
    message: { kind: "typed", type: "TokenUpdateContent" },
  },
  {
    receiver: "internal",
    message: { kind: "typed", type: "JettonTransferNotification" },
  },
  {
    receiver: "internal",
    message: { kind: "typed", type: "JettonBurnNotification" },
  },
  { receiver: "internal", message: { kind: "typed", type: "SetJettonAddr" } },
  { receiver: "internal", message: { kind: "typed", type: "SetCoefficient" } },
  {
    receiver: "internal",
    message: { kind: "typed", type: "Pending2Withdraw" },
  },
  { receiver: "internal", message: { kind: "typed", type: "WithdrawTon" } },
  { receiver: "internal", message: { kind: "typed", type: "WithdrawJetton" } },
  {
    receiver: "internal",
    message: { kind: "typed", type: "ProvideWalletAddress" },
  },
  { receiver: "internal", message: { kind: "typed", type: "Deploy" } },
];

export class SUSDFJettonMasterContract implements Contract {
  static async init(owner: Address, jetton_content: Cell) {
    return await SUSDFJettonMaster_init(owner, jetton_content);
  }

  static async fromInit(owner: Address, jetton_content: Cell) {
    const init = await SUSDFJettonMaster_init(owner, jetton_content);
    const address = contractAddress(0, init);
    return new SUSDFJettonMasterContract(address, init);
  }

  static fromAddress(address: Address) {
    return new SUSDFJettonMasterContract(address);
  }

  readonly address: Address;
  readonly init?: { code: Cell; data: Cell };
  readonly abi: ContractABI = {
    types: SUSDFJettonMaster_types,
    getters: SUSDFJettonMaster_getters,
    receivers: SUSDFJettonMaster_receivers,
    errors: SUSDFJettonMaster_errors,
  };

  private constructor(address: Address, init?: { code: Cell; data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(
    provider: ContractProvider,
    via: Sender,
    args: { value: bigint; bounce?: boolean | null | undefined },
    message:
      | TokenUpdateContent
      | JettonTransferNotification
      | JettonBurnNotification
      | SetJettonAddr
      | SetCoefficient
      | Pending2Withdraw
      | WithdrawTon
      | WithdrawJetton
      | ProvideWalletAddress
      | Deploy
  ) {
    let body: Cell | null = null;
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "TokenUpdateContent"
    ) {
      body = beginCell().store(storeTokenUpdateContent(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "JettonTransferNotification"
    ) {
      body = beginCell()
        .store(storeJettonTransferNotification(message))
        .endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "JettonBurnNotification"
    ) {
      body = beginCell().store(storeJettonBurnNotification(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "SetJettonAddr"
    ) {
      body = beginCell().store(storeSetJettonAddr(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "SetCoefficient"
    ) {
      body = beginCell().store(storeSetCoefficient(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "Pending2Withdraw"
    ) {
      body = beginCell().store(storePending2Withdraw(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "WithdrawTon"
    ) {
      body = beginCell().store(storeWithdrawTon(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "WithdrawJetton"
    ) {
      body = beginCell().store(storeWithdrawJetton(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "ProvideWalletAddress"
    ) {
      body = beginCell().store(storeProvideWalletAddress(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "Deploy"
    ) {
      body = beginCell().store(storeDeploy(message)).endCell();
    }
    if (body === null) {
      throw new Error("Invalid message type");
    }

    await provider.internal(via, { ...args, body: body });
  }

  async getGetMasterData(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("get_master_data", builder.build())).stack;
    const result = loadGetterTupleMasterInfo(source);
    return result;
  }

  async getGetAddrStakingInfo(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("get_addr_staking_info", builder.build()))
      .stack;
    let result = Dictionary.loadDirect(
      Dictionary.Keys.Address(),
      dictValueParserStakingInfo(),
      source.readCellOpt()
    );
    return result;
  }

  async getBalance(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("balance", builder.build())).stack;
    let result = source.readString();
    return result;
  }

  async getWalletJettonBalance(provider: ContractProvider, addr: Address) {
    let builder = new TupleBuilder();
    builder.writeAddress(addr);
    let source = (await provider.get("wallet_jetton_balance", builder.build()))
      .stack;
    const result = loadGetterTupleStakingInfo(source);
    return result;
  }

  async getGetJettonData(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("get_jetton_data", builder.build())).stack;
    const result = loadGetterTupleJettonData(source);
    return result;
  }

  async getGetWalletAddress(
    provider: ContractProvider,
    owner_address: Address
  ) {
    let builder = new TupleBuilder();
    builder.writeAddress(owner_address);
    let source = (await provider.get("get_wallet_address", builder.build()))
      .stack;
    let result = source.readAddress();
    return result;
  }

  async getGetAddrPendingUsdfAmount(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (
      await provider.get("get_addr_pending_usdf_amount", builder.build())
    ).stack;
    let result = Dictionary.loadDirect(
      Dictionary.Keys.Address(),
      Dictionary.Values.BigInt(257),
      source.readCellOpt()
    );
    return result;
  }

  async getOwner(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("owner", builder.build())).stack;
    let result = source.readAddress();
    return result;
  }
}
