// === logicGates.js ===
// Author: brforeal.dev@gmail.com
// Date: 04/10/2025
// Purpose: Generate and display truth tables for standard logic gates

// === Logic Gate Definitions ===
const Gates = {
    AND: (I1, I2) => I1 & I2,
    OR: (I1, I2) => I1 | I2,
    NOT: (I) => I === 0 ? 1 : 0,
    XOR: (I1, I2) => I1 ^ I2,
    NAND: (I1, I2) => Gates.NOT(Gates.AND(I1, I2)),
    NOR: (I1, I2) => Gates.NOT(Gates.OR(I1, I2)),
    XNOR: (I1, I2) => Gates.NOT(Gates.XOR(I1, I2))
  };
  
  // === Truth Table Generator ===
  function generateTruthTable(gateName) {
    const table = [];
    const gate = Gates[gateName];
  
    if (gateName === 'NOT') {
      for (let I = 0; I <= 1; I++) {
        table.push({ I, O: gate(I) });
      }
    } else {
      for (let I1 = 0; I1 <= 1; I1++) {
        for (let I2 = 0; I2 <= 1; I2++) {
          table.push({ I1, I2, O: gate(I1, I2) });
        }
      }
    }
  
    return table;
  }
  
  // === Print Function ===
  function printTruthTable(truthTable, gateName) {
    console.log(`\nTruth Table for ${gateName} Gate:`);
  
    if (gateName === 'NOT') {
      console.log('I\tO');
      truthTable.forEach(({ I, O }) => console.log(`${I}\t${O}`));
    } else {
      console.log('I1\tI2\tO');
      truthTable.forEach(({ I1, I2, O }) => console.log(`${I1}\t${I2}\t${O}`));
    }
  }
  
  // === Main Execution Trigger ===
  function onUpdate() {
    Object.keys(Gates).forEach(gate => {
      const table = generateTruthTable(gate);
      printTruthTable(table, gate);
    });
  }
  
  // === Stop/End Session ===
  function onStop() {
    console.log("\n[STOP] Halting logic generation and evaluation.");
  }
  
  // === Run Update ===
  onUpdate();
  // onStop(); // Uncomment to simulate session stop
  