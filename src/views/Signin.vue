<template>
    <div class="panel">
        <div class="panel-header">
            <img src="../assets/img/icon.png">
            <div>用”芯“塑造美好生活</div>
        </div>
        <Form ref="signin" :model="sign" :rules="rule" class="form">
            <Form-item prop="user">
                <Input type="text"  v-model="sign.user" placeholder="手机号/邮箱">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </Form-item>
            <Form-item prop="password">
                <Input type="password"  v-model="sign.password" placeholder="密码">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </Input>
            </Form-item>
            <Form-item style="text-align:left" class="form-small-item">
                <Checkbox-group v-model="sign.keeppwd">
                    <Checkbox label="记住密码" ></Checkbox>
                    <a style="float:right" class="small-font" href="#">忘记密码?</a>
                </Checkbox-group>    
            </Form-item>
            <Form-item >
                <Button @click="submit('signin')" class="form-btn"  type="primary">登录</Button>
            </Form-item>
            <Form-item class="form-small-item">
                <label>没有账号?</label><router-link to="/signup">立即注册</router-link>
            </Form-item>
        </Form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            sign: {
                user: '',
                password: '',
                keeppwd: []
            },
            rule:{
                user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 8, message: '密码长度不能小于8位', trigger: 'blur' }
                    ]
            }
        }
    },
    methods: {
            submit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }

}
</script>

<style scoped>
.panel {
    background:#fff; 
    text-align: center; 
    font-size: 18px;
    margin: 100px auto;
    width: 300px;
    padding: 20px;
    border: 1px solid #d8dee2;
    height: auto;
    vertical-align: middle;
    border-radius: 15px;
}


.panel-header {
    margin-bottom: 20px;
}


.form {
    width: 100%;
    font-size:14px;
}


.form-small-item{
    margin-top:-10px;
    font-size: 12px;
}

.small-font{
    font-size: 12px;
}


.form-btn {
    width: 100%;
    font-size: 15px;
}
</style>
