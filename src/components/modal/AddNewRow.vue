<template>
    <div>
        <form @submit="onSubmit" class="form-control">
<!--            <div :class="{'invalid' : this.id.isError}">-->
<!--                <label for="id">id</label>-->
<!--                <input @focus="focusElem('id')"-->
<!--                       type="number" ref="id"-->
<!--                       id="id"-->
<!--                       v-model.number="id.value">-->
<!--                <small v-if="this.id.isError">{{ this.id.isError}}</small>-->
<!--            </div>-->

            <div :class="{'invalid' : this.firstName.isError}">
                <label for="firstName">FirstName</label>
                <input @focus="focusElem('firstName')"
                       type="text"
                       id="firstName"
                       v-model.trim="firstName.value">
                <small v-if="this.firstName.isError">{{this.firstName.isError}}</small>
            </div>

            <div :class="{'invalid' : this.lastName.isError}">
                <label for="lastName">LastName</label>
                <input @focus="focusElem('lastName')"
                       type="text"
                       id="lastName"
                       v-model.trim="lastName.value">
                <small v-if="this.lastName.isError">{{this.lastName.isError}}</small>
            </div>

            <div :class="{'invalid' : this.email.isError}">
                <label for="email">email</label>
                <input @focus="focusElem('email')"
                       type="text"
                       ref="email"
                       id="email"
                       v-model="email.value">
                <small v-if="this.email.isError">{{this.email.isError}}</small>
            </div>
            <button class="btn primary" :disabled="!enableBtn">Добавить в таблицу</button>
        </form>
    </div>
</template>

<script>
  export default {
    name: "AddNewRow",
    data() {
      return {
        //id: {value: null, isError: false},
        firstName: {value: null, isError: false},
        lastName: {value: null, isError: false},
        email: {value: null, isError: false},
        isErrorValidate: false
      }
    },
    methods: {
      onSubmit(e) {
        this.isErrorValidate = false
        //this.isRequaired(this.id)
        this.isRequaired(this.firstName)
        this.isRequaired(this.lastName)
        this.isRequaired(this.email)
        this.isValidEmail(this.email)
        this.isAllLetters(this.firstName)
        this.isAllLetters(this.lastName)

        if(!this.isErrorValidate) {
          this.$store.commit('addNewRow',
            {
              //id: this.id.value,
              first_name: this.firstName.value,
              last_name: this.lastName.value,
              email: this.email.value,
              myId: Math.random(),
            })
          this.$emit('close')
        }
        e.preventDefault();
      },
      isRequaired(field) {
        if(!field.value) {
          field.isError = 'Обязательное поле'
          this.isErrorValidate = true
        }
      },
      isValidEmail(email) {
        const regExpEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regExpEmail.test(email.value)) {
          email.isError = 'Неверный формат'
          this.isErrorValidate = true
        }
      },
      isAllLetters(obj) {
        const regExpLetters = /^([a-zа-яё]+)$/i
        if(!regExpLetters.test(obj.value)) {
          obj.isError = 'Должны быть лишь буквы'
          this.isErrorValidate = true
        }
      },
      focusElem(elem) {
        this[elem].isError = false
      }
    },
    computed: {
      enableBtn() {
        return !!(//this.id.value &&
          this.firstName.value &&
          this.lastName.value &&
          this.email.value);
      }
    }
  }
</script>

<style scoped>
    .form-control div {
        margin-bottom: 1rem;
    }
    .invalid input {
        border-color: #e53935;
    }

    .form-control {
        position: relative;
        margin-bottom: 0.5rem;
    }
    .form-control input {
        margin: 0 auto;
        outline: none;
        border: 2px solid #ccc;
        display: block;
        width: 70%;
        color: #2c3e50;
        padding: 0.5rem 1.5rem;
        border-radius: 3px;
        font-size: 1rem;
        resize: none;
    }
    .form-control label {
        display: block;
        margin: 0 0 0.3rem 0.3rem;
        font-weight: 500;
    }
    .form-control small {
        color: #e53935;
    }
    .form-control input:active,
    .form-control input:focus {
        transition: border 0.22s;
        border: 2px solid #42b983;
    }
</style>
