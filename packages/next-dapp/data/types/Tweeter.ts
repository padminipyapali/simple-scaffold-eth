/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface TweeterInterface extends utils.Interface {
  contractName: "Tweeter";
  functions: {
    "setTweet(string)": FunctionFragment;
    "tweety()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "setTweet", values: [string]): string;
  encodeFunctionData(functionFragment: "tweety", values?: undefined): string;

  decodeFunctionResult(functionFragment: "setTweet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tweety", data: BytesLike): Result;

  events: {};
}

export interface Tweeter extends BaseContract {
  contractName: "Tweeter";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TweeterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    setTweet(
      _tweet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tweety(overrides?: CallOverrides): Promise<[string]>;
  };

  setTweet(
    _tweet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tweety(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    setTweet(_tweet: string, overrides?: CallOverrides): Promise<void>;

    tweety(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    setTweet(
      _tweet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tweety(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    setTweet(
      _tweet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tweety(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}