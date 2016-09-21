'use strict';

function Modal() {
	this._id = null;
}

Modal.prototype.open = function(id, data) {
	this._id = id;
};

/**
 * @ngdoc service
 * @name revampedFitnessApp.modalService
 * @description
 * # modalService
 * Service in the revampedFitnessApp.
 */

function ModalService() {
	this.modalIds = {};
}

ModalService.prototype.openModal = function(data) {
	//Open modal and store a reference to it
	var id = Math.random();
	var modal = new Modal(id, data);
	this.modalIds[id] = modal;
};

ModalService.prototype.getModal = function(id) {
	return this.modalIds[id] || null;
};

ModalService.prototype.closeModal = function(id) {
	var modal = this.modalIds[id];
	if (modal) {
		modal.close();
		return true;
	}
	return false;
};

angular.module('revampedFitnessApp').service('modalService', ModalService);
