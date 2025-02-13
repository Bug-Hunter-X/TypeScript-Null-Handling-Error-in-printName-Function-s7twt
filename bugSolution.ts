function printName(name: string | null): void {
  console.log((name ?? "").toUpperCase());
}

printName(null); //Outputs an empty string
printName("Alice"); //Outputs "ALICE"