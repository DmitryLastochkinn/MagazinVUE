<template>
  <div>
    <div class="page-title">
      <h3>Заказчики</h3>
    </div>

    <section>
      <button class="btn waves-effect waves-light" type="submit">
        Создать
        <i class="material-icons right">add</i>
      </button>
      <br>
      <form>
        <div class="input-field">
          <input id="search" type="search" required />
          <label class="label-icon" for="search">
            <i class="material-icons">search</i>
          </label>
          <i class="material-icons">close</i>
        </div>
      </form>

      <table>
        <thead>
          <tr>
            <th>Код</th>
            <th>Имя</th>
            <th>Скидка,%</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1212</td>
            <td>Иван</td>
            <td>15</td>
            <td>ivan@mail.ru</td>
            <th class="btns">
              <button class="btn-small btn btn-col">
                <i class="material-icons">edit</i>
              </button>
              <button class="btn-small btn btn-col red">
                <i class="material-icons">delete</i>
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

