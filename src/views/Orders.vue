<template>
  <div>
    <div class="page-title">
      <h3>Заказы</h3>
    </div>

    <section>
      <div class="nav-wrapper">
        <form>
          <div class="input-field">
            <input id="search" type="search" required />
            <label class="label-icon" for="search">
              <i class="material-icons">search</i>
            </label>
            <i class="material-icons">close</i>
          </div>
        </form>
      </div>

      <a
        class="dropdown-trigger black-text left multifilter"
        href="#"
        data-target="filtrPrice"
        ref="filtrPrice"
      >
        Фильтр по цене
        <i class="material-icons right-small" black>arrow_drop_down</i>
      </a>
      <div id="filtrPrice" class="dropdown-content hide-on-small-and-down left">
        <div class="dropdown">
          <div class="multifilter-list">
            <div class="range range_inputs">
              <div class="range__inner">
                <span class="range__text">От</span>
                <input
                  class="text-field range__value range__value_left"
                  autocomplete="off"
                  placeholder="74"
                  maxlength="8"
                  value
                />
                <span class="range__label"></span>
                <span class="range__text">До</span>
                <input
                  autofocus
                  class="text-field range__value range__value_right"
                  autocomplete="off"
                  placeholder="192200"
                  maxlength="8"
                  value
                />
                <span class="range__label"></span>
              </div>
            </div>
          </div>
          <div class="multifilter-actions">
            <span class="btn btn-small">Применить</span>
          </div>
        </div>
      </div>

      <a
        class="dropdown-trigger black-text left multifilter"
        href="#"
        data-target="filtrStatus"
        ref="filtrStatus"
      >
        Статус
        <i class="material-icons right-small" black>arrow_drop_down</i>
      </a>
      <div id="filtrStatus" class="dropdown-content left">
        <ul>
          <li v-for="item in Statuslist" :key="item.sort">
            <a href="#" class="black-text" @click.prevent="logout">{{item.title}}</a>
          </li>
        </ul>
      </div>

      <table>
        <thead>
          <tr>
            <th>Номер заказа</th>
            <th>Заказчик</th>
            <th>Статус</th>
            <th>Дата заказа</th>
            <th>Итого</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1212</td>
            <td>Иван</td>
            <td>Новый</td>
            <td>25.01.19</td>
            <td>7500</td>
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


<script>
export default {
  data: () => ({
    interval: null,
    dropdown: null,
    Statuslist: [
      { title: "Новый", filtr: 0 },
      { title: "Ожидание", filtr: 1 },
      { title: "Выполнен", filtr: 2 }
    ]
  }),
  mounted() {
    this.filtrPrice = window.M.Dropdown.init(this.$refs.filtrPrice, {
      constrainWidth: false,
      coverTrigger: false
    });
    this.filtrStatus = window.M.Dropdown.init(this.$refs.filtrStatus, {
      constrainWidth: false,
      coverTrigger: false
    });
  }
};
</script>