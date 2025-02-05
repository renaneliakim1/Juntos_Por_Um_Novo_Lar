/* const jsonProfissoes = {
  "profissoes": [
      "Não Tenho Profissão",
      "Advogado",
      "Agente de Viagens",
      "Agrônomo",
      "Alfaiate",
      "Almoxarife",
      "Analista de Dados",
      "Analista de Marketing",
      "Analista de Sistemas",
      "Arquiteto",
      "Artista Plástico",
      "Assistente Administrativo",
      "Assistente Social",
      "Atendente",
      "Auditor",
      "Auxiliar de Enfermagem",
      "Babá",
      "Barman",
      "Biomédico",
      "Bibliotecário",
      "Biólogo",
      "Cabeleireiro",
      "Caixa",
      "Carpinteiro",
      "Chef de Cozinha",
      "Cientista da Computação",
      "Comissário de Bordo",
      "Consultor",
      "Contador",
      "Coordenador de Projetos",
      "Costureira",
      "Cuidador de Idosos",
      "Designer Gráfico",
      "Designer de Interiores",
      "Desenvolvedor Front-end",
      "Desenvolvedor Back-end",
      "Desenvolvedor Web",
      "Diarista",
      "Economista",
      "Educador Físico",
      "Eletricista",
      "Encanador",
      "Enfermeiro",
      "Engenheiro Civil",
      "Engenheiro de Produção",
      "Engenheiro de Software",
      "Engenheiro Mecânico",
      "Escritor",
      "Esteticista",
      "Farmacêutico",
      "Fisioterapeuta",
      "Fotógrafo",
      "Garçom",
      "Gerente Comercial",
      "Gerente de Projetos",
      "Gerente Financeiro",
      "Gestor Ambiental",
      "Gestor de Recursos Humanos",
      "Guia de Turismo",
      "Instrutor de Autoescola",
      "Jardineiro",
      "Jornalista",
      "Lavador de Carros",
      "Mecânico",
      "Médico",
      "Motoboy",
      "Motorista",
      "Nutricionista",
      "Operador de Caixa",
      "Operador de Máquinas",
      "Padeiro",
      "Pedagogo",
      "Pedreiro",
      "Personal Trainer",
      "Pescador",
      "Pintor",
      "Porteiro",
      "Professor",
      "Programador",
      "Promotor de Vendas",
      "Psicólogo",
      "Publicitário",
      "Recepcionista",
      "Redator",
      "Representante Comercial",
      "Secretária",
      "Segurança",
      "Servente de Obras",
      "Serviços Gerais",
      "Soldador",
      "Supervisor de Produção",
      "Técnico Agrícola",
      "Técnico de Enfermagem",
      "Técnico de Informática",
      "Técnico Eletrônico",
      "Técnico em Mecatrônica",
      "Técnico em Segurança do Trabalho",
      "Taxista",
      "Tradutor",
      "Vendedor",
      "Veterinário",
      "Web Designer",
      "Zootecnista"
  ]
};

const selectElement = document.getElementById("profissoesSelect");

jsonProfissoes.profissoes.forEach((profissao, index) => {
  const option = document.createElement("option");
  option.value = index + 1;
  option.textContent = profissao;
  selectElement.appendChild(option);
});
 */



const cargosEmpresa = [
  "Administrador", "Advogado", "Agricultor", "Analista de Sistemas", "Arquiteto",
  "Assistente Administrativo", "Atendente", "Auditor", "Babá", "Barman", "Bibliotecário",
  "Biólogo", "Bombeiro", "Cabeleireiro", "Caixa", "Caminhoneiro", "Cantor", "Chef de Cozinha",
  "Cientista", "Cobrador", "Comediante", "Comerciante", "Contador", "Coordenador", "Corretor",
  "Costureira", "Cozinheiro", "Dançarino", "Designer Gráfico", "Diretor", "Economista",
  "Eletricista", "Empresário", "Enfermeiro", "Engenheiro", "Esteticista", "Farmacêutico",
  "Faxineiro", "Fisioterapeuta", "Fotógrafo", "Garçom", "Geógrafo", "Gerente", "Historiador",
  "Jornalista", "Juiz", "Médico", "Montador", "Músico", "Nutricionista", "Operador de Máquina",
  "Padeiro", "Pedagogo", "Pedreiro", "Personal Trainer", "Pintor", "Policial", "Professor",
  "Programador", "Psicólogo", "Publicitário", "Recepcionista", "Redator", "Relações Públicas",
  "Representante Comercial", "Secretária", "Segurança", "Soldado", "Supervisor", "Técnico de Informática",
  "Técnico de Segurança", "Técnico em Edificações", "Terapeuta", "Tesoureiro", "Tradutor",
  "Vendedor", "Veterinário", "Web Designer", "Zelador"
];

const cargosProfissional = [
  "Não Tenho Profissão", "Advogado", "Agente de Viagens", "Agrônomo", "Alfaiate", "Almoxarife",
  "Analista de Dados", "Analista de Marketing", "Analista de Sistemas", "Arquiteto",
  "Artista Plástico", "Assistente Administrativo", "Assistente Social", "Atendente",
  "Auditor", "Auxiliar de Enfermagem", "Babá", "Barman", "Biomédico", "Bibliotecário",
  "Biólogo", "Cabeleireiro", "Caixa", "Carpinteiro", "Chef de Cozinha",
  "Cientista da Computação", "Comissário de Bordo", "Consultor", "Contador",
  "Coordenador de Projetos", "Costureira", "Cuidador de Idosos", "Designer Gráfico",
  "Designer de Interiores", "Desenvolvedor Front-end", "Desenvolvedor Back-end",
  "Desenvolvedor Web", "Diarista", "Economista", "Educador Físico", "Eletricista",
  "Encanador", "Enfermeiro", "Engenheiro Civil", "Engenheiro de Produção",
  "Engenheiro de Software", "Engenheiro Mecânico", "Escritor", "Esteticista",
  "Farmacêutico", "Fisioterapeuta", "Fotógrafo", "Garçom", "Gerente Comercial",
  "Gerente de Projetos", "Gerente Financeiro", "Gestor Ambiental", "Gestor de Recursos Humanos",
  "Guia de Turismo", "Instrutor de Autoescola", "Jardineiro", "Jornalista", "Lavador de Carros",
  "Mecânico", "Médico", "Motoboy", "Motorista", "Nutricionista", "Operador de Caixa",
  "Operador de Máquinas", "Padeiro", "Pedagogo", "Pedreiro", "Personal Trainer",
  "Pescador", "Pintor", "Porteiro", "Professor", "Programador", "Promotor de Vendas",
  "Psicólogo", "Publicitário", "Recepcionista", "Redator", "Representante Comercial",
  "Secretária", "Segurança", "Servente de Obras", "Serviços Gerais", "Soldador",
  "Supervisor de Produção", "Técnico Agrícola", "Técnico de Enfermagem", "Técnico de Informática",
  "Técnico Eletrônico", "Técnico em Mecatrônica", "Técnico em Segurança do Trabalho",
  "Taxista", "Tradutor", "Vendedor", "Veterinário", "Web Designer", "Zootecnista"
];

function renderCargos(containerClass, cargosLista, prefix) {
  const container = document.querySelector(`.${containerClass}`);
  cargosLista.forEach((cargo, index) => {
      const div = document.createElement("div");
      div.classList.add("form-check");
      div.innerHTML = `
          <input class="form-check-input" type="checkbox" id="${prefix}${index}">
          <label class="form-check-label" for="${prefix}${index}">${cargo}</label>
      `;
      container.appendChild(div);
  });
}

// Renderizando listas
renderCargos("scroll-container-empresa", cargosEmpresa, "empresaCargo");
renderCargos("scroll-container-profissional", cargosProfissional, "profissionalCargo");