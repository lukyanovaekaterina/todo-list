<template lang="pug">
    .footer
        .footer-content
            router-link(
            tag="button"
            to="/"
        ).footer__btn-create Перейти к заметкам
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
     text-transform: uppercase;
}

.footer{

 &-content{
     padding: 10px 20px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     height: 50px;
 }
}
</style>