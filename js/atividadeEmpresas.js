/* 
const jsonAtividadeEmpresas = {
  "profissoesEmpresas": [
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

const selectElement = document.getElementById("profissoesSelectEmpresa");

jsonAtividadeEmpresas.profissoesEmpresas.forEach((profissaoEmpresas, index) => {
  const option = document.createElement("option");
  option.value = index + 1;
  option.textContent = profissaoEmpresas;
  selectElement.appendChild(option);
});

 */




/* 



document.addEventListener("DOMContentLoaded", function () {
  const profissoes = [
      "Não Tenho Profissão",

      "Advogado", "Agente de Viagens", "Agrônomo", "Alfaiate", "Almoxarife", "Analista de Dados",
      "Analista de Marketing", "Analista de Sistemas", "Arquiteto", "Artista Plástico",
      "Assistente Administrativo", "Assistente Social", "Atendente", "Auditor", "Auxiliar de Enfermagem",
      "Babá", "Barman", "Biomédico", "Bibliotecário", "Biólogo", "Cabeleireiro", "Caixa", "Carpinteiro",
      "Chef de Cozinha", "Cientista da Computação", "Comissário de Bordo", "Consultor", "Contador",
      "Coordenador de Projetos", "Costureira", "Cuidador de Idosos", "Designer Gráfico",
      "Designer de Interiores", "Desenvolvedor Front-end", "Desenvolvedor Back-end", "Desenvolvedor Web",
      "Diarista", "Economista", "Educador Físico", "Eletricista", "Encanador", "Enfermeiro",
      "Engenheiro Civil", "Engenheiro de Produção", "Engenheiro de Software", "Engenheiro Mecânico",
      "Escritor", "Esteticista", "Farmacêutico", "Fisioterapeuta", "Fotógrafo", "Garçom",
      "Gerente Comercial", "Gerente de Projetos", "Gerente Financeiro", "Gestor Ambiental",
      "Gestor de Recursos Humanos", "Guia de Turismo", "Instrutor de Autoescola", "Jardineiro",
      "Jornalista", "Lavador de Carros", "Mecânico", "Médico", "Motoboy", "Motorista", "Nutricionista",
      "Operador de Caixa", "Operador de Máquinas", "Padeiro", "Pedagogo", "Pedreiro", "Personal Trainer",
      "Pescador", "Pintor", "Porteiro", "Professor", "Programador", "Promotor de Vendas", "Psicólogo",
      "Publicitário", "Recepcionista", "Redator", "Representante Comercial", "Secretária", "Segurança",
      "Servente de Obras", "Serviços Gerais", "Soldador", "Supervisor de Produção", "Técnico Agrícola",
      "Técnico de Enfermagem", "Técnico de Informática", "Técnico Eletrônico", "Técnico em Mecatrônica",
      "Técnico em Segurança do Trabalho", "Taxista", "Tradutor", "Vendedor", "Veterinário", "Web Designer",
      "Zootecnista"
  ];

  const profissoesEmpresas = [
      "Administrador", "Advogado", "Advogado Criminal", "Agente de Aeroporto", "Agente de Turismo",
      "Analista Administrativo", "Analista Contábil", "Analista de Comunicação", "Analista de Crédito",
      "Analista de Dados", "Analista de Logística", "Analista de Marketing", "Analista de Recursos Humanos",
      "Analista de Redes", "Analista de Segurança da Informação", "Analista de Sistemas", "Analista Financeiro",
      "Antropólogo", "Apicultor", "Arquiteto", "Arquivista", "Artesão", "Artista Plástico",
      "Assistente Administrativo", "Assistente Comercial", "Assistente de Atendimento",
      "Assistente de Contabilidade", "Assistente de Departamento Pessoal", "Assistente de Exportação",
      "Assistente de Importação", "Assistente de Marketing", "Assistente de Recursos Humanos",
      "Assistente Jurídico", "Assistente Social", "Astrônomo", "Atendente", "Ator", "Auditor",
      "Auxiliar Administrativo", "Auxiliar Contábil", "Auxiliar de Almoxarifado", "Auxiliar de Cozinha",
      "Auxiliar de Enfermagem", "Auxiliar de Escritório", "Auxiliar de Limpeza", "Auxiliar de Manutenção",
      "Auxiliar de Produção", "Babá", "Barman", "Bibliotecário", "Biólogo", "Biomédico", "Bombeiro Civil",
      "Cabeleireiro", "Caixa", "Camareira", "Cantor", "Carpinteiro", "Cartógrafo", "Chef de Cozinha",
      "Cientista da Computação", "Cientista de Dados", "Cobrador de Ônibus", "Comissário de Bordo",
      "Comprador", "Condutor de Ambulância", "Confeiteiro", "Consultor Ambiental", "Consultor Comercial",
      "Consultor de Imóveis", "Consultor de Recursos Humanos", "Consultor Financeiro", "Contador",
      "Controlador de Qualidade", "Coordenador de Eventos", "Coordenador de Projetos", "Coordenador Escolar",
      "Copeiro", "Costureira", "Cozinheiro", "Criador de Conteúdo Digital", "Cuidador de Animais",
      "Cuidador de Idosos", "Dançarino", "Decorador", "Dentista", "Desenhista Industrial", "Designer de Interiores",
      "Designer de Moda", "Designer de Produto", "Designer Gráfico", "Desenvolvedor Back-end",
      "Desenvolvedor Front-end", "Desenvolvedor Full Stack", "Desenvolvedor Mobile", "Desenvolvedor Web",
      "Diretor de Arte", "Diretor de Cinema", "Economista", "Editor de Vídeo", "Educador Físico",
      "Engenheiro de Software", "Gerente Administrativo", "Gerente Comercial", "Gerente de Hotel",
      "Professor", "Programador", "Psicólogo", "Publicitário", "Redator", "Soldador", "Supervisor de Produção"
  ];

  function preencherSelect(id, lista) {
      const select = document.getElementById(id);
      lista.forEach((profissao, index) => {
          const option = document.createElement("option");
          option.value = index + 1;
          option.textContent = profissao;
          select.appendChild(option);
      });
  }

  preencherSelect("profissoesSelect", profissoes);
  preencherSelect("profissoesSelectVoluntarios", profissoes);
  preencherSelect("profissoesSelectEmpresa", profissoesEmpresas);
}); */