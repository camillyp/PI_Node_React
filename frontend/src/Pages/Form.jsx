import Header from '../Header';

function Form() {
    return (
        <div>
            <Header title="React Form" />
            <form>
                <fieldset>
                    <legend>
                        <h2>Dados de Cadastros</h2>
                    </legend>

                    <div>
                        <label>Nome:
                            <input type="text" name="txtNome" id="txtNome" />
                        </label>
                    </div>

                    <div>
                        <label>Idade:
                            <input type="number" name="txtIdade" id="txtIdade" />
                        </label>
                    </div>

                    <div>
                       <label>UF:
                           <select name="cmbUF" id="cmbUF">
                               <option value="0">Selecione uma opção</option>
                           </select>
                       </label>
                   </div>
                   <input type="submit" value="Salvar"  />
                </fieldset>
            </form>
        </div>

    )
}

export default Form;