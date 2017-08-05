<template>
    <Menu mode="horizontal" theme="dark" active-name="1">
        <Row>
            <Col span="4">
            <router-link to="/">
                <Menu-item name="home" class="nav-logo">
                    <img src="../assets/img/icon.png">
                    <span>国芯科技</span>
                </Menu-item>
            </router-link>
            </Col>
            <Col span="14">
            <router-link to="/">
                <Menu-item name="home">
                    <Icon type="home"></Icon>
                    首页
                </Menu-item>
            </router-link>
            <router-link to="/doc">
                <Menu-item name="doc">
                    <Icon type="social-buffer"></Icon>
                    开发者文档
                </Menu-item>
            </router-link>
            <router-link to='/'>
                <Menu-item name="forum">
                    <Icon type="chatboxes"></Icon>
                    论坛
                </Menu-item>
            </router-link>
            </Col>
    
            <Col offset="3" span="3">
            <router-link to='/signin'>
                <Menu-item name="signin">
                    <Icon type="log-in"></Icon>
                    登录
                </Menu-item>
            </router-link>
            <router-link to='/signup'>
                <Menu-item name="signup">
                    <Icon type="person-add"></Icon>
                    注册
                </Menu-item>
            </router-link>
            </Col>
        </Row>
    
    </Menu>
</template>
<script>


export default {
    name: 'navbar',
}


</script>

<style scoped>
.nav-logo {
    font-size: 18px;
    padding-left: 40px;
}

.nav-logo a {
    color: #fff;
}

.nav-logo img {
    height: 40px;
    width: 75px;
    vertical-align: middle;
}
</style>
