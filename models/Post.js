const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Post model

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        post_text: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        underscored: true,
        freezeTableName: true,
        modelName: 'post'
    }
);

module.exports = Post;