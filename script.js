const btn = [
    { id: "clear", value: "c" },
    { id: "divide", value: "/" },
    { id: "multiplica", value: "*" },
    { id: "subtrai", value: "-" },
    { id: "soma", value: "+" },
    { id: "igual", value: "=" },
    { id: "ponto", value: "." }
  ];
  
  const numeros = [
    { id: "zero", value: 0 },
    { id: "um", value: 1 },
    { id: "dois", value: 2 },
    { id: "tres", value: 3 },
    { id: "quatro", value: 4 },
    { id: "cinco", value: 5 },
    { id: "seis", value: 6 },
    { id: "sete", value: 7 },
    { id: "oito", value: 8 },
    { id: "nove", value: 9 }
  ];
  
  const tela = document.getElementById("resultado");
  
  function anexarEvento(elements, type) {
    elements.forEach(({ id, value }) => {
      document.getElementById(id).onclick = function() {
        calculadora(type, value);
      };
    });
  }
  
  anexarEvento(btn, "acao");
  anexarEvento(numeros, "valor");
  
  function calculadora(type, value) {
    tela.value =
      type === "acao"
        ? value === "c"
          ? ""
          : ["+", "-", "*", "/", "."].includes(value)
          ? tela.value + value
          : value === "="
          ? eval(tela.value)
          : tela.value
        : tela.value + value;
  }
  