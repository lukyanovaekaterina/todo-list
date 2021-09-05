<template lang="pug">
    div.footer-container
        router-link(
            tag="button"
            to="/create"
        ).footer__btn-create Создать
        router-link(
            tag="button"
            to="/create"
            ).footer__btn-change Изменить
        router-link(
            tag="button"
            to="/create"
            ).footer__btn-remove Удалить
</template>   

<style lang="scss" scoped>
 button{
     border: none;
     background: transparent;
     color: inherit;
     cursor: pointer;
     border: 1px solid transparent;
     border-radius: 3px;
     outline: none;
}

 .footer-container{
     padding: 10px 20px;
     display: flex;
     justify-content: space-between;
     align-items: center;
 }      
</style>