namespace factoryMethodPattern {
  export interface Product {
    use(param?: any) : void
  }

  export class ConcreteProduct implements Product {
    use = (param?: any) => {
      return "ConcreteProduct的use方法"
    }
  }

  export interface Factory {
    factoryMethod(param?:any) : Product
  }
  
  export class ConcreteFactory implements Factory {
    factoryMethod = (params?: any) => {
      return new ConcreteProduct()
    }
  }
}