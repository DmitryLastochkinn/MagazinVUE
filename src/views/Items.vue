<template>
  <div>
    <div class="page-title">
      <h3>Товары</h3>
    </div>

    <section>
      <button class="btn waves-effect waves-light" type="submit">
        Создать
        <i class="material-icons right">add</i>
      </button>

      <div class="multifilter-wrapp">
        <div class="multifilter">
          <a class="dropdown-trigger black-text" href="#"  data-target="Sortdd" ref="Sortdd">
            Сортировка
            <i class="material-icons right-small">arrow_drop_down</i>
          </a>
          <ul id="Sortdd" class="dropdown-content">
            <li v-for="item in Sortlist" :key="item.sort">
              <a href="#" class="black-text" @click.prevent="logout">{{item.title}}</a>
            </li>
          </ul>
        </div>
        <div class="multifilter">
          <a class="dropdown-trigger black-text" href="#" data-target="Filtrdd" ref="Filtrdd">
            Категории
            <i class="material-icons right-small">arrow_drop_down</i>
          </a>

          <ul id="Filtrdd" class="dropdown-content">
            <li v-for="item in Categorylist" :key="item.filtr">
              <a href="#" class="black-text" @click.prevent="logout">{{item.title}}</a>
            </li>
          </ul>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Код</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Категория</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1212</td>
            <td>Треска</td>
            <td>798</td>
            <td>Рыба</td>
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
  props: ["value"],
  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null,
    Sortlist: [
      { title: "По возрастанию цены", sort: 1 },
      { title: "По убыванию цены", sort: 2 }
    ],
    Categorylist: [
      { title: "Морепродукты", filtr: 1 },
      { title: "Мясо", filtr: 2 }
    ]
  }),

  mounted() {
    this.select = window.M.FormSelect.init(this.$refs.select, {
      constrainWidth: false,
      coverTrigger: false
    });
    this.select2 = window.M.FormSelect.init(this.$refs.select2, {
      constrainWidth: false,
      coverTrigger: false
    });
    this.Sortdd = window.M.Dropdown.init(this.$refs.Sortdd, {
      constrainWidth: false,
      coverTrigger: false
    });
    this.Filtrdd = window.M.Dropdown.init(this.$refs.Filtrdd, {
      constrainWidth: false,
      coverTrigger: false
    });
  }
};
</script>