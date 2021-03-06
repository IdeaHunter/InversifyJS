import { expect } from "chai";
import Binding from "../../src/bindings/binding";
import BindingScope from "../../src/bindings/binding_scope";
import * as Stubs from "../utils/stubs";

describe("Binding", () => {

  it("Should set its own properties correctly", () => {

    let fooIdentifier = "FooInterface";
    let fooBinding =  new Binding<Stubs.FooInterface>(fooIdentifier, BindingScope.Transient);
    expect(fooBinding.serviceIdentifier).eql(fooIdentifier);
    expect(fooBinding.implementationType).eql(null);
    expect(fooBinding.cache).eql(null);
    expect(fooBinding.scope).eql(BindingScope.Transient);
    expect(fooBinding.guid.length).eql(36);
  });

});
