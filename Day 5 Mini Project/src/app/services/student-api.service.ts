import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentAPIService {

  myDomain = 'http://localhost:4435';
  mahmoudURL = 'http://localhost:4435/api/students';
  domain = 'http://localhost:50709';
  baseURL = `${this.domain}/api/student`;
  
  constructor(private client: HttpClient) { 
     this.domain = this.myDomain;
     this.baseURL = this.mahmoudURL;
  }

  getStudents(){
    return this.client.get(this.baseURL);
  }

  getStudent(id){
    return this.client.get(`${this.baseURL}/${id}`);
  }

  addStudent(std: { Name: string, Age: number, Email: string, Image}){
    const fd = new FormData();
    fd.append('image', std.Image, std.Image.name);
    fd.append('Name', std.Name);
    fd.append('Age', std.Age.toString());
    fd.append('Email', std.Email);
    return this.client.post(this.baseURL, fd, {
      reportProgress: true,
      observe: 'events'
    });
  }

  editStudent(id, std: { ID: number, Name: string, Age: number, Email: string, Image, imageChanged: boolean}){
    const fd = new FormData();
    fd.append('ID', std.ID.toString());
    if(!std.imageChanged)
    {
      fd.append('imageChanged', 'false');
      fd.append('image', std.Image);
    }
    else{
      fd.append('imageChanged', 'true');
      fd.append('image', std.Image, std.Image.name);
    }
    
    fd.append('Name', std.Name);
    fd.append('Age', std.Age.toString());
    fd.append('Email', std.Email);
    return this.client.put(`${this.baseURL}/${id}`, fd);
  }

  deleteStudent(id){
    return this.client.delete(`${this.baseURL}/${id}`);
  }
}
