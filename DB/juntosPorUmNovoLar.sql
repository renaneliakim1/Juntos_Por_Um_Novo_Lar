create database Juntos_Por_Um_Novo_Lar;
use Juntos_Por_Um_Novo_Lar;


create table empresa(
id_empresa int auto_increment primary key unique,
nome_empresa varchar (255) not null,
cnpj_empresa varchar(50) not null ,
email_empresa varchar(100) unique,
senha_empresa varchar(255) not null
);

create table profissao_refugiado(
id_profissao int auto_increment primary key,
nome_profissao_refugiado varchar (100) unique not null 
);

create table voluntario(
id_voluntario int auto_increment primary key unique,
nome_voluntario varchar (255) not null,
cpf_voluntario varchar(50) not null ,
localidade_voluntario varchar(100) not null,
telefone_voluntario varchar(14) not null,
nascimento_voluntario date,
descricao_voluntario text not null,
email_voluntario varchar(100) unique,
senha_voluntario varchar(255) not null
);

create table refugiado(
id_refugiado int auto_increment primary key  ,
nome_refugiado varchar (255) not null,
nacionalidade_refugiado varchar (100) not null,
cpf_refugiado varchar(50) not null unique,
telefone_refugiado varchar(14) not null,
nascimento_refugiado date,
id_profissao_refugiado int null,
email_refugiado varchar(100) unique,
senha_refugiado varchar(255) not null,
foreign key (id_profissao_refugiado)  references profissao_refugiado(id_profissao) on delete set null

);


CREATE TABLE vaga (
id_vaga INT AUTO_INCREMENT PRIMARY KEY,
id_empresa INT NOT NULL,
titulo_vaga VARCHAR(255) NOT NULL,
empresa_vaga VARCHAR(255) not null,
descricao_vaga TEXT NOT NULL,
id_profissao_refugiado INT NOT NULL,
salario_vaga decimal(10,2) not null,
experiencia int not null,
requisitos varchar (255) not null,
foreign key (id_empresa) references empresa(id_empresa) ON DELETE CASCADE,
foreign key (id_profissao_refugiado) references profissao_refugiado(id_profissao) ON DELETE CASCADE
);



-- Inserir empresas
INSERT INTO empresa (nome_empresa, cnpj_empresa, email_empresa, senha_empresa)
VALUES
('Empresa A', '12.345.678/0001-99', 'contato@empresaA.com', 'senha123'),
('Empresa B', '98.765.432/0001-01', 'contato@empresaB.com', 'senha456');

-- Inserir profissões para refugiados
INSERT INTO profissao_refugiado (nome_profissao_refugiado)
VALUES
('Desenvolvedor de Software'),
('Médico'),
('Professor de Matemática');

-- Inserir voluntários
INSERT INTO voluntario (nome_voluntario, cpf_voluntario, localidade_voluntario, telefone_voluntario, nascimento_voluntario, descricao_voluntario, email_voluntario, senha_voluntario)
VALUES
('João Silva', '123.456.789-00', 'São Luís', '(98) 99999-9999', '1990-05-15', 'Voluntário na área de educação', 'joao@voluntarios.com', 'senhaJoao'),
('Maria Oliveira', '987.654.321-00', 'São Luís', '(98) 98888-8888', '1985-07-20', 'Voluntária na área de saúde', 'maria@voluntarios.com', 'senhaMaria');

-- Inserir refugiados
INSERT INTO refugiado (nome_refugiado, nacionalidade_refugiado, cpf_refugiado, telefone_refugiado, nascimento_refugiado, id_profissao_refugiado, email_refugiado, senha_refugiado)
VALUES
('Ahmed Al-Farsi', 'Síria', '112.233.445-66', '(98) 97777-7777', '1992-08-25', 1, 'ahmed@refugiados.com', 'senhaAhmed'),
('Amina Hassan', 'Somália', '223.344.556-77', '(98) 96666-6666', '1990-02-14', 2, 'amina@refugiados.com', 'senhaAmina');

-- Inserir vagas de emprego
INSERT INTO vaga (id_empresa, titulo_vaga, empresa_vaga, descricao_vaga, id_profissao_refugiado, salario_vaga, experiencia, requisitos)
VALUES
(1, 'Desenvolvedor Full Stack', 'Empresa A', 'Vaga para desenvolvedor de software com experiência em JavaScript e Node.js.', 1, 5000.00, 2, 'Experiência mínima de 2 anos em desenvolvimento de software'),
(2, 'Médico Clínico Geral', 'Empresa B', 'Vaga para médico com experiência em atendimento emergencial e clínico geral.', 2, 7000.00, 5, 'Experiência mínima de 5 anos como médico clínico geral');


-- Consultar todas as empresas
SELECT * FROM empresa;

-- Consultar todos os voluntários
SELECT * FROM voluntario;

-- Consultar todos os refugiados com suas profissões
SELECT r.id_refugiado, r.nome_refugiado, r.nacionalidade_refugiado, p.nome_profissao_refugiado 
FROM refugiado r
JOIN profissao_refugiado p ON r.id_profissao_refugiado = p.id_profissao;

-- Consultar vagas de emprego disponíveis
SELECT v.id_vaga, v.titulo_vaga, v.empresa_vaga, v.salario_vaga, v.experiencia, v.requisitos, e.nome_empresa
FROM vaga v
JOIN empresa e ON v.id_empresa = e.id_empresa;

-- Consultar voluntários por localidade (exemplo: "São Luís")
SELECT * FROM voluntario WHERE localidade_voluntario = 'São Luís';




