### Orgem GIT:

**git init  **-  Iniciar o GIT na pasta
**git add .  **-  Adicionar as mudanças no repositório local
**git commit -m "nome da mudança" ** -  Salva as mudanças local
**git branch -m main**
**git remote add origin "Link do repositório" ** -  Sincronizando o repositório local com o remoto (GitHub)
**git push -u origin main**  -  Empurrar o repositório local para o remoto.


**git commit -am "Msg"**





### Comandos referente ao curso:

**git restore --stage <arquivo>**  -  Ele tira a mudança do do arquivo no commit.
**git restore --stage .** -  Ele tira todas as mudanças de todos arquivos no commit.
**git restore <arquivo>**  -  Restaurar modificações
**git log ** -  Mostra o histórico de Commits
**git log --oneline ** -  Mostra o histórico de Commits resumido
**git log --since=2020-10-01  **-  Mostra o histórico de Commits APARTIR de tal data
**git log --until=2020-10-01 ** -  Mostra o histórico de Commits ANTES de tal data
**git log --author--(NOME)  **-  Filtra os Commits pelo autor
**git log --grep="Filtro"  **-  Filtra os commits pela palavra
**git rm -r --cached <Aquivo>  **-  Remove todos os arquivos do "Git add" tira da Stage Area
**git rm <arquivo>  **-  Excluir arquivo
**git diff  **-  Ver alterações feita no projeto
**git diff --staged  **-  Ver as modificações dos arquivos da stage area x repositório
**git diff --color-words  **-  Mostra as alterações em cada linha
**git mv <nome antigo nome novo> ** -  Renomear o arquivo
**git mv <nome arquivo pasta/nome arquivo>  **-  Mover arquivo para outra pasta
**git commit --amend -m "Mensagem do commit"**  -  Modifica o nome do ultimo commit, podendo sobescrever o ultimo commit
**git checkout <começo do SHA1> -- <Nome do arquivo>  **-  Ele recupera alterações ou até mesmo o arquivo apagado, com base em um Commit antigo
**git clean -f  **-  Remove os arquivos, sem volta.
**git revert HEAD~<numero> ** -  RESTAURA para um commit, numero: no git log, commits abaixo do HEAD(principal) conta como HEAD-1, HEAD-2, etc.
**git show <SHA1> --color-words  **-  Mostra as alterações de um Commit especifico



### Comandos extras do Windows:

**mv**  -  Move arquivos para outra pasta. ex: mv "Arquivo" ./"Pasta"
**cd  **-  Entrar em uma pasta, ex cd windows
**cd.. ** -  Voltar uma pasta 
**dir  **-  Listar as pastas onde estou.
**mkdir ** -  Criar uma pasta
**del ** -  Deletar oque existe dentro de uma pasta (Arquivos)
**rmdir ** -  Apagar uma pasta (Tem que estar vazio)
**rmdir workspace ** (ex) /S /Q - Apaga a pasta.
**cls ** -  Limpar o CMD
**echo hello > hello.txt  **-  Criar um arquivo txt chamado hello e inserir " hello " dentro.