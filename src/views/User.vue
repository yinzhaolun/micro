<template>
  <div class="manage">
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      width="50%">
      <el-form ref="form" :rules='rules' :inline="true" :model="form" label-width="80px">
        <el-form-item label="姓名" prop="name">
        <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="name">
        <el-input placeholder="请输入年龄" v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="name">
        <el-select v-model="form.sex" placeholder="请选择">
          <el-option label="男" value="0"></el-option>
          <el-option label="女" value="1"></el-option>
        </el-select>
        </el-form-item>
        <el-form-item label="地址" prop="name">
        <el-input placeholder="请输入地址" v-model="form.addr"></el-input>
        </el-form-item>
        <el-form-item label="出生日期" prop="name">
         <el-date-picker
          v-model="form.birth"
          type="date"
          placeholder="选择日期"
          value-format="yyyy-MM-DD">
         </el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
    <div class="manageheader">
      <el-button @click="dialogVisible = true" type="primary">
        + 新增</el-button>
         <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别">
        <template slot-scope="scope">
          <span style="margin-left :10px">{{ scope.row.sex == 1 ? '男' : '女'}}</span>
          </template>
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄">
      </el-table-column>
      <el-table-column
        prop="birth"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="addr"
        label="地址">
        <template slot-scope="scope">
           <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
           <el-button type="danger" size="mini" @click="handleDelete()">删除</el-button>
          </template>
      </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
      return {
        dialogVisible: false,
        form:{
          name:'',
          age:'',
          sex:'',
          birth:'',
          addr:''
        },
        rules:{
          name:[
            {required:true,message:'请输入姓名'}
          ],
          age:[
            {required:true,message:'请输入年龄'}
          ],
          sex:[
            {required:true,message:'请选择性别'}
          ],
          birth:[
            {required:true,message:'请选择出生日期'}
          ],
          addr:[
            {required:true,message:'请输入地址'}
          ]
        },
        tableData:[],
        modelType:0
      };
    },
    methods: {
      submit(){
        this.$refs.form.validate((valid)=>{
          if(valid){
            const arr = []
            arr.push(this.form.name)
            arr.push(this.form.age)
            arr.push(this.form.sex)
            arr.push(this.form.birth)
            arr.push(this.form.addr)
            
            this.tableData.push(arr)
            console.log(this.tableData);
            this.dialogVisible = false
          }
        })
      },
      handleClose(){
        this.$refs.form.resetFields()
         this.dialogVisible = false
      },
      cancel(){
        this.handleClose()
      },
      handleEdit(){}
    }
};
</script>

<style>
</style>