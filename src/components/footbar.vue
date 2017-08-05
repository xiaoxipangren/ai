<template>
<div class="footer">
    <Row>
        <div v-for="link in links">
            <Col :span="span">
            <h4 class="footer-title">{{ link.group }}</h4>
            <ul>
                <li v-for="anchor in link.anchor">
                    <a :href="anchor.href">{{ anchor.text }}</a>
                </li>
            </ul>
            </Col>
        </div>
    </Row>
    <Row>
        <Col class="footer-copyright">{{ copyright }} </Col>
    </Row>
</div>
</template>

<style scoped>
.footer {
    border-top:1px solid #d6d6d6;
    padding-top: 40px;
    margin: auto 100px;
    text-align: center;
}

.footer-title {
    font-size: 16px;
    padding-bottom: 10px;
    padding-top: 24px;
    font-weight: 900;
    color: #2b2d32;
}

.footer-copyright{
    margin-top: 30px;
    padding-top:30px;
    padding-bottom: 30px;
    font-size: 14px;
    border-top: 1px solid #d6d6d6
}

li {
    height: auto;
    font-size: 14px;
    margin-top: 10px;
}

a {
    color: black;
}

a:hover {
    text-decoration-line: underline;
}
</style>



<script>
import footerConfig from '../config/footer-config'



export default {
    data() {
        var footer = footerConfig
        var span = 24 / footer.links.length;

        return {
            links: footer.links,
            copyright: footer.copyright,
            span: span
        };
    }
}
</script>
