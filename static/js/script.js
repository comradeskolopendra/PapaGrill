$(".header__burger").on("click", function() {
    $(".menubar").addClass("menubar__active")
    $(".menubar").toggle("slide")
    $(".header__burger .header__burger_item").toggleClass("header__burger_item__active")
})

$(".franchise__button").on("click", createModal)

function createModal() {
    disableScroll();
    $("body").append('<div class="modal__bg" style="display: none;"></div>');
    const str = `
        <div class="modal__contents">
            <div class="modal__header">
                <h1 class="modal__heading">Заполните форму</h1>
            </div>
            <svg class="modal__close" xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                <rect width="49.0334" height="2.70617" transform="matrix(-0.712888 -0.701278 -0.701278 0.712888 38.75 36.6616)" fill="white"/>
                <rect x="1.74902" y="36.6616" width="49.0334" height="2.70617" transform="rotate(-44.5296 1.74902 36.6616)" fill="white"/>
            </svg>
            <form id="requestForm" class="form">
                <div class="form__item">
                    <input/ class="form__input">
                    <span class="form__span">Как вас зовут?</span>
                </div>
                <div class="form__item">
                    <input/ class="form__input">
                    <span class="form__span">Номер телефона</span>
                </div>
                <div class="form__item">
                    <input/ class="form__input">
                    <span class="form__span">Город</span>
                </div>
                <div class="form__item">
                    <input/ class="form__input">
                    <span class="form__span">Почта</span>
                </div>
                <div class="form__item">
                    <button type="submit" class="form__submit">Подвердить</button>
                </div>
            </form>
        </div>
    `;

    $(".modal__bg").append(str).fadeIn(500);
    $(".modal__close").on("click", () => {
        $(".modal__bg").fadeOut(500, () => {
            $(".modal__bg").remove();
            $("body").removeClass("modal__opened")
        });
    });
}

function disableScroll() {
    $("body").addClass("modal__opened")
}