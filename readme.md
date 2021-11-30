# Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro


**RN**
Não deve ser possível cadastrar um carro com uma placa já existente
Não deve ser possível alterar a placa de um carro já cadastrado
O carro deve ser cadastrado, por adrão, com disponibilidade


# Listagem de carros

**RF**
Deve ser possível listar todos os carros disponíveis
Deve ser possível listar todos os carros disponíveis pelo nome da marca
Deve ser possível listar todos os carros disponíveis pelo nome do carro


**RN**
O usuário não precisar estar logado no sistema.



# Cadastro de especificação do carro

**RF**
Deve ser possível cadastrar uma especificação para um carro
Deve ser possível listar todas as especificações
Deve ser possível listar todos os carros


**RN**
Não deve ser possível cadastrar uma especificação para um carro não não cadastrado
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro
O usuário responsável pelo cadastro deve ser um usuário administrador

# Cadastro de imangens do carro

**RF**
Deve ser possível cadastrar a imagem do carro
Deve ser possível listar todos os carros

**RNF**
Utilizar o multer para upload dos arquivos

**Rn**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
O usuário responsável pelo cadastro deve ser um usuário administrador


# Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel

**RNF**


**Rn**
O aluguel deve ter duração mínima de 24 horas
Não deve ser possível cadastrar um alugel caso já exista um aberto para o mesmo usuário
Não deve ser possível cadastrar um alugel caso já exista um aberto para o mesmo carro
