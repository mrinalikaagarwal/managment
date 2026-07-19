import { Controller, Get, Post, Put, Delete, Param } from "@nestjs/common";

@Controller('/ourstudents')
export class Students{
    @Get()
    index() {
        return "This is a List of students";
    }
    @Post()
    store() {
        return "This is store page";
    }
    @Get(':id')
    show(@Param() {id}) {
        return "This is show page"+id;
    }
    @Put(':id')
    update(@Param() {id}) {
        return "This is update page" +id;
    }
    @Delete(':id')
    destroy(@Param() {id}) {
        return "This is delete page" +id;
    }
    
}
