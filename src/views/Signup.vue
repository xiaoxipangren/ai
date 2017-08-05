<template>
    <div class="panel">
        <div class="panel-header">
            <img src="../assets/img/icon.png">
            <div>用”芯“塑造美好生活</div>
        </div>
        <Form ref="signup" :model="sign" :rules="rule" class="form">
            <Form-item prop="user">
                <Input type="text" v-model="sign.user" placeholder="手机号/邮箱">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </Form-item>
            <Form-item prop="password">
                <Input type="password" v-model="sign.password" placeholder="输入密码">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </Input>
            </Form-item>
            <Form-item prop="pwdcheck">
                <Input type="password" v-model="sign.pwdcheck" placeholder="确认密码">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </Input>
            </Form-item>
            <Form-item>
                <Button @click="submit('signup')" class="form-btn" type="primary">注册</Button>
            </Form-item>
            <Form-item class="form-small-item">
                <label>已有账号?</label>
                <router-link to="/signin">马上登录</router-link>
            </Form-item>
        </Form>
    </div>
</template>
<script>
export default {
    data() {

        const validateUser = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('用户名不能为空'));
            }
            // 模拟异步验证效果
            setTimeout(() => {
                    if (Number.isInteger(value)) {
                        callback(new Error('用户名不能全为数字'));
                    } else {
                        if (value.length < 4 || value.length>16) {
                            callback(new Error('用户名为4-16字符！'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
        };

        const validatePassword = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.sign.pwdcheck !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.signup.validateField('pwdcheck');
                }
                callback();
            }
        };
        const validatePwdcheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.sign.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };



        return {
            sign: {
                user: '',
                password: '',
                pwdcheck: ''
            },
            rule: {
                user: { validator: validateUser, trigger: 'blur' },
                password: { validator: validatePassword, trigger: 'blur' },
                pwdcheck: { validator: validatePwdcheck, trigger: 'blur' }
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
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
}
</script>

<style scoped>
.panel {
    background: #fff;
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
    font-size: 14px;
}


.form-small-item {
    margin-top: -10px;
    font-size: 12px;
}

.small-font {
    font-size: 12px;
}


.form-btn {
    width: 100%;
    font-size: 15px;
}
</style>
