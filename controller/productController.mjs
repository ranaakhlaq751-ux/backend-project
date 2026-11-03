
import product from "../Models/Product.mjs";

export const getAllproduts = async (req, res) => {
    try {
        const allproduct = await product.find();

        res.send({
            message: "Data fetched successfully",
            data: allproduct
        });

    } catch (e) {
        res.status(500).send({
            message: e.message
        });
    }
};

export const getproductby = async (req, res) => {
    try {
        const prduct = await product.findById(req.params.id);

        if (!prduct) {
            return res.status(404).send({
                message: "Product not found"
            });
        }

        res.send({
            message: "Product fetched successfully",
            data: prduct
        });

    } catch (e) {
        res.status(500).send({
            message: e.message
        });
    }
};

export const createproduct = async (req, res) => {
    try {
        const imageURL = req.file?.path;

        const newproduct = new product({
            ...req.body,
            image: imageURL
        });

        await newproduct.save();

        res.status(201).send({
            message: "Product created successfully",
            data: newproduct
        });

    } catch (e) {
        res.status(500).send({
            message: e.message
        });
    }
};

export const updateproduct = async (req, res) => {
    try {
        const updatedproduct = await product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedproduct) {
            return res.status(404).send({
                message: "Product not found"
            });
        }

        res.send({
            message: "Product updated successfully",
            data: updatedproduct
        });

    } catch (e) {
        res.status(500).send({
            message: e.message
        });
    }
};

export const deleteproduct = async (req, res) => {
    try {
        const deletedproduct = await product.findByIdAndDelete(
            req.params.id
        );

        if (!deletedproduct) {
            return res.status(404).send({
                message: "Product not found"
            });
        }

        res.send({
            message: "Product deleted successfully",
            data: deletedproduct
        });

    } catch (e) {
        res.status(500).send({
            message: e.message
        });
    }
};
