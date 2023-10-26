module.exports = {
    //닉네임 정규표현식
    nicknameRegExp: new RegExp(/^[가-힣a-zA-Z]+$/),

    //아이디 정규 표현식
    idRegExp: new RegExp(/^[a-z][a-z0-9]*$/i),

    //이메일 정규표현식
    emailRegExp: new RegExp(/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),

    //비밀번호 정규표현식: 알파벳, 숫자, 특수 문자 8~20글자
    pwRegExp: new RegExp(/^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$/),

    //숫자로만 구성된 문자열 정규표현식: 0~9의 숫자로만 이루어진 문자열
    onlyNumberRegExp: new RegExp(/^[0-9]+$/),

    //timestamp 정규표현식
    timestampRegExp: new RegExp(/^(((\d{4})(-)(0[13578]|10|12)(-)(0[1-9]|[12][0-9]|3[01]))|((\d{4})(-)(0[469]|1??1)(-)([0][1-9]|[12][0-9]|30))|((\d{4})(-)(02)(-)(0[1-9]|1[0-9]|2[0-8]))|(([02468]??[048]00)(-)(02)(-)(29))|(([13579][26]00)(-)(02)(-)(29))|(([0-9][0-9][0][48])(-)(0??2)(-)(29))|(([0-9][0-9][2468][048])(-)(02)(-)(29))|(([0-9][0-9][13579][26])(-)(02??)(-)(29)))(\s([0-1][0-9]|2[0-4]):([0-5][0-9]):([0-5][0-9]))$/),

    //time 정규표현식
    timeRegExp: new RegExp(/^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/)
}
