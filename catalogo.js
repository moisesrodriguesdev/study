// Catálogo das apostilas.
// Para adicionar uma aula: copie o .html para a pasta da disciplina e acrescente
// um item em "aulas" com o título e o caminho do arquivo.
// "tags" é opcional: palavras extras para a busca.
// Para adicionar disciplina ou concurso: siga o mesmo formato.
window.CATALOGO = [
  {
    id: "bacen-2026",
    nome: "BACEN 2026",
    descricao: "Analista · Área 1 · Tecnologia da Informação",
    disciplinas: [
      {
        id: "banco-de-dados",
        nome: "Banco de Dados e Ciência de Dados",
        aulas: [
          { id: "aula-00", titulo: "Aula 00", tema: "Conceitos básicos de banco de dados", tags: "SGBD ANSI/SPARC três esquemas independência ACID transação DBA AD metadados NoSQL", arquivo: "concursos/bacen-2026/banco-de-dados/aula-00.html" },
          { id: "aula-01", titulo: "Aula 01", tema: "Modelagem conceitual e o modelo ER", tags: "MER DER cardinalidade atributos entidade fraca generalização especialização IDEF1X pé-de-galinha", arquivo: "concursos/bacen-2026/banco-de-dados/aula-01.html" }
        ]
      },
      {
        id: "sistemas-operacionais",
        nome: "Sistemas Operacionais",
        aulas: [
          { id: "aula-00", titulo: "Aula 00", tema: "Linux: comandos, rede, permissões, processos e shell", tags: "DNS resolv.conf hosts chmod umask mount fstab kill nice ps shell script iptables FreeBSD", arquivo: "concursos/bacen-2026/sistemas-operacionais/aula-00.html" }
        ]
      }
    ]
  }
];
