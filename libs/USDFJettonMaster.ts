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

export type MasterInfo = {
  $$type: "MasterInfo";
  usdt_supply: bigint;
  pending_usdt_supply: bigint;
  usdt_jettonWallet: Address | null;
  usdf_jettonWallet: Address | null;
  cf_jettonWallet: Address | null;
};

export function storeMasterInfo(src: MasterInfo) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeCoins(src.usdt_supply);
    b_0.storeCoins(src.pending_usdt_supply);
    b_0.storeAddress(src.usdt_jettonWallet);
    b_0.storeAddress(src.usdf_jettonWallet);
    let b_1 = new Builder();
    b_1.storeAddress(src.cf_jettonWallet);
    b_0.storeRef(b_1.endCell());
  };
}

export function loadMasterInfo(slice: Slice) {
  let sc_0 = slice;
  let _usdt_supply = sc_0.loadCoins();
  let _pending_usdt_supply = sc_0.loadCoins();
  let _usdt_jettonWallet = sc_0.loadMaybeAddress();
  let _usdf_jettonWallet = sc_0.loadMaybeAddress();
  let sc_1 = sc_0.loadRef().beginParse();
  let _cf_jettonWallet = sc_1.loadMaybeAddress();
  return {
    $$type: "MasterInfo" as const,
    usdt_supply: _usdt_supply,
    pending_usdt_supply: _pending_usdt_supply,
    usdt_jettonWallet: _usdt_jettonWallet,
    usdf_jettonWallet: _usdf_jettonWallet,
    cf_jettonWallet: _cf_jettonWallet,
  };
}

function loadTupleMasterInfo(source: TupleReader) {
  let _usdt_supply = source.readBigNumber();
  let _pending_usdt_supply = source.readBigNumber();
  let _usdt_jettonWallet = source.readAddressOpt();
  let _usdf_jettonWallet = source.readAddressOpt();
  let _cf_jettonWallet = source.readAddressOpt();
  return {
    $$type: "MasterInfo" as const,
    usdt_supply: _usdt_supply,
    pending_usdt_supply: _pending_usdt_supply,
    usdt_jettonWallet: _usdt_jettonWallet,
    usdf_jettonWallet: _usdf_jettonWallet,
    cf_jettonWallet: _cf_jettonWallet,
  };
}

function loadGetterTupleMasterInfo(source: TupleReader) {
  let _usdt_supply = source.readBigNumber();
  let _pending_usdt_supply = source.readBigNumber();
  let _usdt_jettonWallet = source.readAddressOpt();
  let _usdf_jettonWallet = source.readAddressOpt();
  let _cf_jettonWallet = source.readAddressOpt();
  return {
    $$type: "MasterInfo" as const,
    usdt_supply: _usdt_supply,
    pending_usdt_supply: _pending_usdt_supply,
    usdt_jettonWallet: _usdt_jettonWallet,
    usdf_jettonWallet: _usdf_jettonWallet,
    cf_jettonWallet: _cf_jettonWallet,
  };
}

function storeTupleMasterInfo(source: MasterInfo) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.usdt_supply);
  builder.writeNumber(source.pending_usdt_supply);
  builder.writeAddress(source.usdt_jettonWallet);
  builder.writeAddress(source.usdf_jettonWallet);
  builder.writeAddress(source.cf_jettonWallet);
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
  usdt_wallet_addr: Address;
  usdf_wallet_addr: Address;
};

export function storeSetJettonAddr(src: SetJettonAddr) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1146462872, 32);
    b_0.storeAddress(src.usdt_wallet_addr);
    b_0.storeAddress(src.usdf_wallet_addr);
  };
}

export function loadSetJettonAddr(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1146462872) {
    throw Error("Invalid prefix");
  }
  let _usdt_wallet_addr = sc_0.loadAddress();
  let _usdf_wallet_addr = sc_0.loadAddress();
  return {
    $$type: "SetJettonAddr" as const,
    usdt_wallet_addr: _usdt_wallet_addr,
    usdf_wallet_addr: _usdf_wallet_addr,
  };
}

function loadTupleSetJettonAddr(source: TupleReader) {
  let _usdt_wallet_addr = source.readAddress();
  let _usdf_wallet_addr = source.readAddress();
  return {
    $$type: "SetJettonAddr" as const,
    usdt_wallet_addr: _usdt_wallet_addr,
    usdf_wallet_addr: _usdf_wallet_addr,
  };
}

function loadGetterTupleSetJettonAddr(source: TupleReader) {
  let _usdt_wallet_addr = source.readAddress();
  let _usdf_wallet_addr = source.readAddress();
  return {
    $$type: "SetJettonAddr" as const,
    usdt_wallet_addr: _usdt_wallet_addr,
    usdf_wallet_addr: _usdf_wallet_addr,
  };
}

function storeTupleSetJettonAddr(source: SetJettonAddr) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.usdt_wallet_addr);
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

export type SetCFAddr = {
  $$type: "SetCFAddr";
  cf_jettonWallet: Address;
};

export function storeSetCFAddr(src: SetCFAddr) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2522614282, 32);
    b_0.storeAddress(src.cf_jettonWallet);
  };
}

export function loadSetCFAddr(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2522614282) {
    throw Error("Invalid prefix");
  }
  let _cf_jettonWallet = sc_0.loadAddress();
  return { $$type: "SetCFAddr" as const, cf_jettonWallet: _cf_jettonWallet };
}

function loadTupleSetCFAddr(source: TupleReader) {
  let _cf_jettonWallet = source.readAddress();
  return { $$type: "SetCFAddr" as const, cf_jettonWallet: _cf_jettonWallet };
}

function loadGetterTupleSetCFAddr(source: TupleReader) {
  let _cf_jettonWallet = source.readAddress();
  return { $$type: "SetCFAddr" as const, cf_jettonWallet: _cf_jettonWallet };
}

function storeTupleSetCFAddr(source: SetCFAddr) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.cf_jettonWallet);
  return builder.build();
}

function dictValueParserSetCFAddr(): DictionaryValue<SetCFAddr> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeSetCFAddr(src)).endCell());
    },
    parse: (src) => {
      return loadSetCFAddr(src.loadRef().beginParse());
    },
  };
}

export type Transfer2CF = {
  $$type: "Transfer2CF";
  amount: bigint;
};

export function storeTransfer2CF(src: Transfer2CF) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3253284862, 32);
    b_0.storeCoins(src.amount);
  };
}

export function loadTransfer2CF(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3253284862) {
    throw Error("Invalid prefix");
  }
  let _amount = sc_0.loadCoins();
  return { $$type: "Transfer2CF" as const, amount: _amount };
}

function loadTupleTransfer2CF(source: TupleReader) {
  let _amount = source.readBigNumber();
  return { $$type: "Transfer2CF" as const, amount: _amount };
}

function loadGetterTupleTransfer2CF(source: TupleReader) {
  let _amount = source.readBigNumber();
  return { $$type: "Transfer2CF" as const, amount: _amount };
}

function storeTupleTransfer2CF(source: Transfer2CF) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  return builder.build();
}

function dictValueParserTransfer2CF(): DictionaryValue<Transfer2CF> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeTransfer2CF(src)).endCell());
    },
    parse: (src) => {
      return loadTransfer2CF(src.loadRef().beginParse());
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

export type JettonMint = {
  $$type: "JettonMint";
  origin: Address;
  receiver: Address;
  amount: bigint;
  custom_payload: Cell | null;
  forward_ton_amount: bigint;
  forward_payload: Slice;
};

export function storeJettonMint(src: JettonMint) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1680571655, 32);
    b_0.storeAddress(src.origin);
    b_0.storeAddress(src.receiver);
    b_0.storeInt(src.amount, 257);
    if (src.custom_payload !== null && src.custom_payload !== undefined) {
      b_0.storeBit(true).storeRef(src.custom_payload);
    } else {
      b_0.storeBit(false);
    }
    b_0.storeCoins(src.forward_ton_amount);
    b_0.storeBuilder(src.forward_payload.asBuilder());
  };
}

export function loadJettonMint(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1680571655) {
    throw Error("Invalid prefix");
  }
  let _origin = sc_0.loadAddress();
  let _receiver = sc_0.loadAddress();
  let _amount = sc_0.loadIntBig(257);
  let _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _forward_ton_amount = sc_0.loadCoins();
  let _forward_payload = sc_0;
  return {
    $$type: "JettonMint" as const,
    origin: _origin,
    receiver: _receiver,
    amount: _amount,
    custom_payload: _custom_payload,
    forward_ton_amount: _forward_ton_amount,
    forward_payload: _forward_payload,
  };
}

function loadTupleJettonMint(source: TupleReader) {
  let _origin = source.readAddress();
  let _receiver = source.readAddress();
  let _amount = source.readBigNumber();
  let _custom_payload = source.readCellOpt();
  let _forward_ton_amount = source.readBigNumber();
  let _forward_payload = source.readCell().asSlice();
  return {
    $$type: "JettonMint" as const,
    origin: _origin,
    receiver: _receiver,
    amount: _amount,
    custom_payload: _custom_payload,
    forward_ton_amount: _forward_ton_amount,
    forward_payload: _forward_payload,
  };
}

function loadGetterTupleJettonMint(source: TupleReader) {
  let _origin = source.readAddress();
  let _receiver = source.readAddress();
  let _amount = source.readBigNumber();
  let _custom_payload = source.readCellOpt();
  let _forward_ton_amount = source.readBigNumber();
  let _forward_payload = source.readCell().asSlice();
  return {
    $$type: "JettonMint" as const,
    origin: _origin,
    receiver: _receiver,
    amount: _amount,
    custom_payload: _custom_payload,
    forward_ton_amount: _forward_ton_amount,
    forward_payload: _forward_payload,
  };
}

function storeTupleJettonMint(source: JettonMint) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.origin);
  builder.writeAddress(source.receiver);
  builder.writeNumber(source.amount);
  builder.writeCell(source.custom_payload);
  builder.writeNumber(source.forward_ton_amount);
  builder.writeSlice(source.forward_payload.asCell());
  return builder.build();
}

function dictValueParserJettonMint(): DictionaryValue<JettonMint> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeJettonMint(src)).endCell());
    },
    parse: (src) => {
      return loadJettonMint(src.loadRef().beginParse());
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

export type TransUsdtError = {
  $$type: "TransUsdtError";
  query_id: bigint;
};

export function storeTransUsdtError(src: TransUsdtError) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1156977752, 32);
    b_0.storeUint(src.query_id, 64);
  };
}

export function loadTransUsdtError(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1156977752) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  return { $$type: "TransUsdtError" as const, query_id: _query_id };
}

function loadTupleTransUsdtError(source: TupleReader) {
  let _query_id = source.readBigNumber();
  return { $$type: "TransUsdtError" as const, query_id: _query_id };
}

function loadGetterTupleTransUsdtError(source: TupleReader) {
  let _query_id = source.readBigNumber();
  return { $$type: "TransUsdtError" as const, query_id: _query_id };
}

function storeTupleTransUsdtError(source: TransUsdtError) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  return builder.build();
}

function dictValueParserTransUsdtError(): DictionaryValue<TransUsdtError> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeTransUsdtError(src)).endCell());
    },
    parse: (src) => {
      return loadTransUsdtError(src.loadRef().beginParse());
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

export type FFFJettonMaster$Data = {
  $$type: "FFFJettonMaster$Data";
  total_supply: bigint;
  mintable: boolean;
  owner: Address;
  jetton_content: Cell;
  this_usdt_jettonWallet: Address | null;
  this_usdf_jettonWallet: Address | null;
  this_cf_jettonWallet: Address | null;
  usdt_supply: bigint;
  balances: Dictionary<Address, bigint>;
  pending_withdraw_balance: Dictionary<Address, bigint>;
  pending_usdt_supply: bigint;
};

export function storeFFFJettonMaster$Data(src: FFFJettonMaster$Data) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeCoins(src.total_supply);
    b_0.storeBit(src.mintable);
    b_0.storeAddress(src.owner);
    b_0.storeRef(src.jetton_content);
    b_0.storeAddress(src.this_usdt_jettonWallet);
    b_0.storeAddress(src.this_usdf_jettonWallet);
    let b_1 = new Builder();
    b_1.storeAddress(src.this_cf_jettonWallet);
    b_1.storeCoins(src.usdt_supply);
    b_1.storeDict(
      src.balances,
      Dictionary.Keys.Address(),
      Dictionary.Values.BigInt(257)
    );
    b_1.storeDict(
      src.pending_withdraw_balance,
      Dictionary.Keys.Address(),
      Dictionary.Values.BigInt(257)
    );
    b_1.storeCoins(src.pending_usdt_supply);
    b_0.storeRef(b_1.endCell());
  };
}

export function loadFFFJettonMaster$Data(slice: Slice) {
  let sc_0 = slice;
  let _total_supply = sc_0.loadCoins();
  let _mintable = sc_0.loadBit();
  let _owner = sc_0.loadAddress();
  let _jetton_content = sc_0.loadRef();
  let _this_usdt_jettonWallet = sc_0.loadMaybeAddress();
  let _this_usdf_jettonWallet = sc_0.loadMaybeAddress();
  let sc_1 = sc_0.loadRef().beginParse();
  let _this_cf_jettonWallet = sc_1.loadMaybeAddress();
  let _usdt_supply = sc_1.loadCoins();
  let _balances = Dictionary.load(
    Dictionary.Keys.Address(),
    Dictionary.Values.BigInt(257),
    sc_1
  );
  let _pending_withdraw_balance = Dictionary.load(
    Dictionary.Keys.Address(),
    Dictionary.Values.BigInt(257),
    sc_1
  );
  let _pending_usdt_supply = sc_1.loadCoins();
  return {
    $$type: "FFFJettonMaster$Data" as const,
    total_supply: _total_supply,
    mintable: _mintable,
    owner: _owner,
    jetton_content: _jetton_content,
    this_usdt_jettonWallet: _this_usdt_jettonWallet,
    this_usdf_jettonWallet: _this_usdf_jettonWallet,
    this_cf_jettonWallet: _this_cf_jettonWallet,
    usdt_supply: _usdt_supply,
    balances: _balances,
    pending_withdraw_balance: _pending_withdraw_balance,
    pending_usdt_supply: _pending_usdt_supply,
  };
}

function loadTupleFFFJettonMaster$Data(source: TupleReader) {
  let _total_supply = source.readBigNumber();
  let _mintable = source.readBoolean();
  let _owner = source.readAddress();
  let _jetton_content = source.readCell();
  let _this_usdt_jettonWallet = source.readAddressOpt();
  let _this_usdf_jettonWallet = source.readAddressOpt();
  let _this_cf_jettonWallet = source.readAddressOpt();
  let _usdt_supply = source.readBigNumber();
  let _balances = Dictionary.loadDirect(
    Dictionary.Keys.Address(),
    Dictionary.Values.BigInt(257),
    source.readCellOpt()
  );
  let _pending_withdraw_balance = Dictionary.loadDirect(
    Dictionary.Keys.Address(),
    Dictionary.Values.BigInt(257),
    source.readCellOpt()
  );
  let _pending_usdt_supply = source.readBigNumber();
  return {
    $$type: "FFFJettonMaster$Data" as const,
    total_supply: _total_supply,
    mintable: _mintable,
    owner: _owner,
    jetton_content: _jetton_content,
    this_usdt_jettonWallet: _this_usdt_jettonWallet,
    this_usdf_jettonWallet: _this_usdf_jettonWallet,
    this_cf_jettonWallet: _this_cf_jettonWallet,
    usdt_supply: _usdt_supply,
    balances: _balances,
    pending_withdraw_balance: _pending_withdraw_balance,
    pending_usdt_supply: _pending_usdt_supply,
  };
}

function loadGetterTupleFFFJettonMaster$Data(source: TupleReader) {
  let _total_supply = source.readBigNumber();
  let _mintable = source.readBoolean();
  let _owner = source.readAddress();
  let _jetton_content = source.readCell();
  let _this_usdt_jettonWallet = source.readAddressOpt();
  let _this_usdf_jettonWallet = source.readAddressOpt();
  let _this_cf_jettonWallet = source.readAddressOpt();
  let _usdt_supply = source.readBigNumber();
  let _balances = Dictionary.loadDirect(
    Dictionary.Keys.Address(),
    Dictionary.Values.BigInt(257),
    source.readCellOpt()
  );
  let _pending_withdraw_balance = Dictionary.loadDirect(
    Dictionary.Keys.Address(),
    Dictionary.Values.BigInt(257),
    source.readCellOpt()
  );
  let _pending_usdt_supply = source.readBigNumber();
  return {
    $$type: "FFFJettonMaster$Data" as const,
    total_supply: _total_supply,
    mintable: _mintable,
    owner: _owner,
    jetton_content: _jetton_content,
    this_usdt_jettonWallet: _this_usdt_jettonWallet,
    this_usdf_jettonWallet: _this_usdf_jettonWallet,
    this_cf_jettonWallet: _this_cf_jettonWallet,
    usdt_supply: _usdt_supply,
    balances: _balances,
    pending_withdraw_balance: _pending_withdraw_balance,
    pending_usdt_supply: _pending_usdt_supply,
  };
}

function storeTupleFFFJettonMaster$Data(source: FFFJettonMaster$Data) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.total_supply);
  builder.writeBoolean(source.mintable);
  builder.writeAddress(source.owner);
  builder.writeCell(source.jetton_content);
  builder.writeAddress(source.this_usdt_jettonWallet);
  builder.writeAddress(source.this_usdf_jettonWallet);
  builder.writeAddress(source.this_cf_jettonWallet);
  builder.writeNumber(source.usdt_supply);
  builder.writeCell(
    source.balances.size > 0
      ? beginCell()
          .storeDictDirect(
            source.balances,
            Dictionary.Keys.Address(),
            Dictionary.Values.BigInt(257)
          )
          .endCell()
      : null
  );
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
  builder.writeNumber(source.pending_usdt_supply);
  return builder.build();
}

function dictValueParserFFFJettonMaster$Data(): DictionaryValue<FFFJettonMaster$Data> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(
        beginCell().store(storeFFFJettonMaster$Data(src)).endCell()
      );
    },
    parse: (src) => {
      return loadFFFJettonMaster$Data(src.loadRef().beginParse());
    },
  };
}

type FFFJettonMaster_init_args = {
  $$type: "FFFJettonMaster_init_args";
  owner: Address;
  jetton_content: Cell;
};

function initFFFJettonMaster_init_args(src: FFFJettonMaster_init_args) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeAddress(src.owner);
    b_0.storeRef(src.jetton_content);
  };
}

async function FFFJettonMaster_init(owner: Address, jetton_content: Cell) {
  const __code = Cell.fromBase64(
    "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"
  );
  const __system = Cell.fromBase64(
    "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"
  );
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initFFFJettonMaster_init_args({
    $$type: "FFFJettonMaster_init_args",
    owner,
    jetton_content,
  })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const FFFJettonMaster_errors: { [key: number]: { message: string } } = {
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
  4503: { message: `MintClose: Not owner` },
  7192: { message: `JettonTransferNotification: not enough value` },
  8358: { message: `JettonBurn: Invalid balance` },
  9003: { message: `JettonTransfer: Not enough jettons to transfer` },
  9340: { message: `WithdrawJetton: Not owner` },
  11252: { message: `wallect WithdrawJetton: Not owner` },
  12896: { message: `Pending2Withdraw: usdt_supply is not enough` },
  14472: { message: `JettonTransfer: Invalid value` },
  16745: { message: `Pending2Withdraw: current_pending_balance is not enough` },
  16845: { message: `JettonBurnNotification: Invalid sender` },
  17593: { message: `SetJettonAddr: Invalid sender` },
  18668: { message: `Can't Mint Anymore` },
  23951: { message: `Insufficient gas` },
  24068: { message: `wallect Only owner is allowed to withdraw` },
  26133: { message: `JettonTransfer: Invalid sender` },
  27921: { message: `Only owner is allowed to withdraw` },
  33362: { message: `JettonInternalTransfer: Invalid sender!` },
  36976: { message: `Transfer2CF: Not owner` },
  36999: { message: `Pending2unstaking: Not owner` },
  40470: { message: `JettonMint: Invalid sender` },
  43940: { message: `JettonMint: Not mintable` },
  44255: { message: `JettonBurn: Invalid sender` },
  47063: { message: `usdt2usdf: Can't Mint Anymore` },
  54615: { message: `Insufficient balance` },
  55684: { message: `JettonBurn: Invalid value - Burn` },
  58934: { message: `Transfer2CF: usdt_supply is not enough` },
};

const FFFJettonMaster_types: ABIType[] = [
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
    name: "MasterInfo",
    header: null,
    fields: [
      {
        name: "usdt_supply",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "pending_usdt_supply",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "usdt_jettonWallet",
        type: { kind: "simple", type: "address", optional: true },
      },
      {
        name: "usdf_jettonWallet",
        type: { kind: "simple", type: "address", optional: true },
      },
      {
        name: "cf_jettonWallet",
        type: { kind: "simple", type: "address", optional: true },
      },
    ],
  },
  {
    name: "SetJettonAddr",
    header: 1146462872,
    fields: [
      {
        name: "usdt_wallet_addr",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "usdf_wallet_addr",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
  },
  {
    name: "SetCFAddr",
    header: 2522614282,
    fields: [
      {
        name: "cf_jettonWallet",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
  },
  {
    name: "Transfer2CF",
    header: 3253284862,
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
    name: "JettonMint",
    header: 1680571655,
    fields: [
      {
        name: "origin",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "receiver",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "amount",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
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
    name: "TransUsdtError",
    header: 1156977752,
    fields: [
      {
        name: "query_id",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
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
    name: "FFFJettonMaster$Data",
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
        name: "this_usdt_jettonWallet",
        type: { kind: "simple", type: "address", optional: true },
      },
      {
        name: "this_usdf_jettonWallet",
        type: { kind: "simple", type: "address", optional: true },
      },
      {
        name: "this_cf_jettonWallet",
        type: { kind: "simple", type: "address", optional: true },
      },
      {
        name: "usdt_supply",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "balances",
        type: { kind: "dict", key: "address", value: "int" },
      },
      {
        name: "pending_withdraw_balance",
        type: { kind: "dict", key: "address", value: "int" },
      },
      {
        name: "pending_usdt_supply",
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

const FFFJettonMaster_getters: ABIGetter[] = [
  {
    name: "get_master_data",
    arguments: [],
    returnType: { kind: "simple", type: "MasterInfo", optional: false },
  },
  {
    name: "get_addr_usdt_amount",
    arguments: [],
    returnType: { kind: "dict", key: "address", value: "int" },
  },
  {
    name: "get_addr_pending_usdt_amount",
    arguments: [],
    returnType: { kind: "dict", key: "address", value: "int" },
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
    name: "owner",
    arguments: [],
    returnType: { kind: "simple", type: "address", optional: false },
  },
];

export const FFFJettonMaster_getterMapping: { [key: string]: string } = {
  get_master_data: "getGetMasterData",
  get_addr_usdt_amount: "getGetAddrUsdtAmount",
  get_addr_pending_usdt_amount: "getGetAddrPendingUsdtAmount",
  get_jetton_data: "getGetJettonData",
  get_wallet_address: "getGetWalletAddress",
  owner: "getOwner",
};

const FFFJettonMaster_receivers: ABIReceiver[] = [
  {
    receiver: "internal",
    message: { kind: "typed", type: "JettonTransferNotification" },
  },
  { receiver: "internal", message: { kind: "typed", type: "JettonMint" } },
  { receiver: "internal", message: { kind: "text", text: "Owner: MintOpen" } },
  {
    receiver: "internal",
    message: { kind: "typed", type: "JettonBurnNotification" },
  },
  {
    receiver: "internal",
    message: { kind: "typed", type: "Pending2Withdraw" },
  },
  { receiver: "internal", message: { kind: "typed", type: "Transfer2CF" } },
  { receiver: "internal", message: { kind: "typed", type: "WithdrawTon" } },
  { receiver: "internal", message: { kind: "typed", type: "WithdrawJetton" } },
  { receiver: "internal", message: { kind: "typed", type: "SetJettonAddr" } },
  { receiver: "internal", message: { kind: "typed", type: "SetCFAddr" } },
  {
    receiver: "internal",
    message: { kind: "typed", type: "TokenUpdateContent" },
  },
  { receiver: "internal", message: { kind: "text", text: "Owner: MintClose" } },
  {
    receiver: "internal",
    message: { kind: "typed", type: "ProvideWalletAddress" },
  },
  { receiver: "internal", message: { kind: "typed", type: "Deploy" } },
];

export class USDFJettonMasterContract implements Contract {
  static async init(owner: Address, jetton_content: Cell) {
    return await FFFJettonMaster_init(owner, jetton_content);
  }

  static async fromInit(owner: Address, jetton_content: Cell) {
    const init = await FFFJettonMaster_init(owner, jetton_content);
    const address = contractAddress(0, init);
    return new USDFJettonMasterContract(address, init);
  }

  static fromAddress(address: Address) {
    return new USDFJettonMasterContract(address);
  }

  readonly address: Address;
  readonly init?: { code: Cell; data: Cell };
  readonly abi: ContractABI = {
    types: FFFJettonMaster_types,
    getters: FFFJettonMaster_getters,
    receivers: FFFJettonMaster_receivers,
    errors: FFFJettonMaster_errors,
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
      | JettonTransferNotification
      | JettonMint
      | "Owner: MintOpen"
      | JettonBurnNotification
      | Pending2Withdraw
      | Transfer2CF
      | WithdrawTon
      | WithdrawJetton
      | SetJettonAddr
      | SetCFAddr
      | TokenUpdateContent
      | "Owner: MintClose"
      | ProvideWalletAddress
      | Deploy
  ) {
    let body: Cell | null = null;
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
      message.$$type === "JettonMint"
    ) {
      body = beginCell().store(storeJettonMint(message)).endCell();
    }
    if (message === "Owner: MintOpen") {
      body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
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
      message.$$type === "Pending2Withdraw"
    ) {
      body = beginCell().store(storePending2Withdraw(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "Transfer2CF"
    ) {
      body = beginCell().store(storeTransfer2CF(message)).endCell();
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
      message.$$type === "SetJettonAddr"
    ) {
      body = beginCell().store(storeSetJettonAddr(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "SetCFAddr"
    ) {
      body = beginCell().store(storeSetCFAddr(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "TokenUpdateContent"
    ) {
      body = beginCell().store(storeTokenUpdateContent(message)).endCell();
    }
    if (message === "Owner: MintClose") {
      body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
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

  async getGetAddrUsdtAmount(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("get_addr_usdt_amount", builder.build()))
      .stack;
    let result = Dictionary.loadDirect(
      Dictionary.Keys.Address(),
      Dictionary.Values.BigInt(257),
      source.readCellOpt()
    );
    return result;
  }

  async getGetAddrPendingUsdtAmount(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (
      await provider.get("get_addr_pending_usdt_amount", builder.build())
    ).stack;
    let result = Dictionary.loadDirect(
      Dictionary.Keys.Address(),
      Dictionary.Values.BigInt(257),
      source.readCellOpt()
    );
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

  async getOwner(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("owner", builder.build())).stack;
    let result = source.readAddress();
    return result;
  }
}
